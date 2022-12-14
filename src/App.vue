<template>
  <div id="app">
    <router-view />
    <!-- 路由出口 --><!-- 路由匹配到的组件将渲染在这里 -->
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    getUserIP(onNewIP) {
      let MyPeerConnection =
        window.RTCPeerConnection ||
        window.mozRTCPeerConnection ||
        window.webkitRTCPeerConnection;
      let pc = new MyPeerConnection({
        iceServers: [],
      });
      let noop = () => {};
      let localIPs = {};
      let ipRegex =
        /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
      let iterateIP = (ip) => {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
      };
      pc.createDataChannel("");
      pc.createOffer()
        .then((sdp) => {
          sdp.sdp.split("\n").forEach(function (line) {
            if (line.indexOf("candidate") < 0) return;
            line.match(ipRegex).forEach(iterateIP);
          });
          pc.setLocalDescription(sdp, noop, noop);
        })
        .catch((reason) => {});
      pc.onicecandidate = (ice) => {
        if (
          !ice ||
          !ice.candidate ||
          !ice.candidate.candidate ||
          !ice.candidate.candidate.match(ipRegex)
        )
          return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
      };
    },
  },
  mounted: function () {
    //页面初始化函数
    this.getUserIP((ip) => {
      this.ip = ip;
      this.$http
        .get("http://localhost:8080/tccp/user/getAllUser")
        .then(function (res) {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].ip == ip) {
              var aid = res.data[i].aid;
              this.$store.commit("SET_SELECTIP", ip);
              this.$store.commit("SET_SELECTAID", aid);
            }
          }
        })
        .catch(function (error) {
        });
    });
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
