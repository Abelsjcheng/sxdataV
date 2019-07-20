<template>
    <div class="item billState"  style="width:100%;height:100%">
					<div class="itemTit">
						<span class="border-green">节目播出管理</span>
					</div>
					<div class="itemCon">
						<div class="StateBox">
							<div class="StateTit">
								<span>节目名称</span>
								<span>播出类型</span>
                                <span>建立日期</span>
								<span>播出日期</span>
							</div>	
							<div id="FontScroll">
								<ul class="line">
									<li>
										<div class="fontInner clearfix">
											<span>P70415-142619</span>
											<span>
												<sup class="el-badge__content el-badge__content--normal">正常播出</sup>
											</span>
											<span>2019-06-05 14:35:24</span>
								            <span>2019-06-07</span>
										</div>
									</li>
									<li class="">
										<div class="fontInner clearfix">
											<span>P70415-142619</span>
											<span>
												<sup class="el-badge__content el-badge__content--normal">正常播出</sup>
											</span>
											<span>2019-06-05 14:35:24</span>
								            <span>2019-06-07</span>
										</div>
									</li>
									<li class="">
										<div class="fontInner clearfix">
											<span>P70415-142619</span>
											<span>
												<sup class="el-badge__content el-badge__content--danger">紧急播出</sup>
											</span>
											<span>2019-06-05 14:35:24</span>
								            <span>2019-06-07</span>
										</div>
									</li>
									<li class="">
										<div class="fontInner clearfix">
											<span>P70415-142619</span>
											<span>
												<sup class="el-badge__content el-badge__content--normal">正常播出</sup>
											</span>
											<span>2019-06-05 14:35:24</span>
								            <span>2019-06-07</span>
										</div>
									</li>
									<li class="">
										<div class="fontInner clearfix">
											<span>P70415-142619</span>
											<span>
												<sup class="el-badge__content el-badge__content--normal">正常播出</sup>
											</span>
											<span>2019-06-05 14:35:24</span>
								            <span>2019-06-07</span>
										</div>
									</li>
									<li class="">
										<div class="fontInner clearfix">
											<span>P70415-142619</span>
											<span>
												<sup class="el-badge__content el-badge__content--danger">紧急播出</sup>
											</span>
											<span>2019-06-05 14:35:24</span>
								            <span>2019-06-07</span>
										</div>
									</li>
									<li class="">
										<div class="fontInner clearfix">
											<span>P70415-142619</span>
											<span>
												<sup class="el-badge__content el-badge__content--danger">紧急播出</sup>
											</span>
											<span>2019-06-05 14:35:24</span>
								            <span>2019-06-07</span>
										</div>
									</li>
									<li class="">
										<div class="fontInner clearfix">
											<span>P70415-142619</span>
											<span>
												<sup class="el-badge__content el-badge__content--normal">正常播出</sup>
											</span>
											<span>2019-06-05 14:35:24</span>
								            <span>2019-06-07</span>
										</div>
									</li>
									<li class="">
										<div class="fontInner clearfix">
											<span>P70415-142619</span>
											<span>
												<sup class="el-badge__content el-badge__content--danger">紧急播出</sup>
											</span>
											<span>2019-06-05 14:35:24</span>
								            <span>2019-06-07</span>
										</div>
									</li>
								</ul>
								
							</div>
						</div>
					</div>
				</div>
</template>

<script>
export default {
	
}
</script>


<style lang="scss" scoped>
    .item {
        margin-bottom: 24px;
        background-color: rgba(0,0,0,0.3);
        border-radius: 8px;
        font-size: 14px;
        line-height: 1.5;
        font-family: Arial, 'Microsoft Yahei';
    }
    .itemTit {
        padding: 12px 30px;
        border-bottom: 1px solid #1e5b6b;
    }
    .itemTit span {
        display: block;
        height: 12px;
        line-height: 20px;
        border-left: 5px solid transparent;
        font-size: 18px;
        color: #fff;
        padding-left: 8px;
    }
    .border-green {
        border-color: #32ffc7 !important;
    }
    .itemCon {
        padding: 12px 0px;
    }
    .billState .StateTit {
        height: 35px;
        border-bottom: 1px dashed #404040;
    }
    .billState .StateBox span:nth-child(1) {
        width: 26%;
    }
    .billState .StateBox span:nth-child(2) {
        width: 22%;
    }
    .billState .StateBox span:nth-child(3) {
        width: 33%;
    }
    .billState .StateBox span:nth-child(4) {
        width: 18%;
    }
    .billState .StateBox span {
        float: left;
        width: 25%;
        height: 36px;
        line-height: 37px;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    #FontScroll {
        height:29.4vh;
        overflow:scroll;
    }
    ul{
        list-style: none;
        border:medium none;
        margin:0;
        padding:0;
        font-size: 100%;
        display:block;
        -webkit-margin-before:0em;
        -webkit-margin-after:0em;
        -webkit-margin-start:0px;
        -webkit-margin-end:0px;
        -webkit-padding-start:0px;
        // width:100%;
    }
    li{
        border:medium none;
        margin: 0;
        padding: 0;
        font-size: 100%;
        display:list-item;
        text-align: -webkit-match-parent;
    }
    .billState .StateBox .fontInner{
        border-bottom:1px dashed #404040
    }
	.el-badge__content {
		height: 22px;
		padding: 0 10px;
		border: none;
		margin-left: 8px;
		margin-top: 3px;
		border-radius: 10px;
		color: #FFF;
		display: inline-block;
		font-size: 10px;
		line-height: 18px;
		text-align: center;
		white-space: nowrap;
	}
	.el-badge__content--danger {
		background-color: rgb(184, 23, 26);
	}
	.el-badge__content--normal {
		background-color: #258763;
	}
	sup {
		vertical-align: super;
		font-size: smaller;
	}



</style>
