/**
 * 
 * @create: 2019/8/12
 * @describe: 请求路径配置
 */

const BASE = 'http://192.168.1.150:9001/';//召华接口
let qiniuUrl = 'http://192.168.1.148:9001/api'   //彭斌接口

export default {
  sys:{
    login:`${BASE}api/auth/oauth/token`,  //登录接口
    resgin:`${BASE}api/user/sysuser/insert_user`,  //注册接口
  },
  companyJoin:{
	  qiniuUrl:qiniuUrl,
	  subForm: `${BASE}api/enterprise/enterprise/enter_audit`,
	  getArea: `${BASE}api/enterprise/round/select_area_list`,
	  getGarden:`${BASE}api/enterprise/round/select_area_one`,
  },
  home:{
	  nav0:`${qiniuUrl}/page/introduceCompanyEntry/findlist`,
	  nav1:`${qiniuUrl}/page/introduceOfficeSpace/findlist`,
	  nav2:`${qiniuUrl}/page/introduceFinancialTaxation/findlist`,
	  nav3:`${qiniuUrl}/page/introducePolicyApproval/findlist`,
	  nav4:`${qiniuUrl}/page/introduceTrademarkAssets/findlist`,
	  navD0:`${qiniuUrl}/page/introduceCompanyEntry/findbyid`,
	  navD1:`${qiniuUrl}/page/introduceOfficeSpace/findbyid`,
	  navD2:`${qiniuUrl}/page/introduceFinancialTaxation/findbyid`,
	  navD3:`${qiniuUrl}/page/introducePolicyApproval/findbyid`,
	  navD4:`${qiniuUrl}/page/introduceTrademarkAssets/findbyid`,
	  /* 关于我们*/
	  aboutUs:`${qiniuUrl}/page/introduceIntroductionPark/findlist`,
	  /* 孵化导师*/
	  teacherList:`${qiniuUrl}/page/introduceTeacher/findlist`,
	  teacherDetail:`${qiniuUrl}/page/introduceTeacher/findbyid`,
	  /* 用户信息*/
	  getUserInfo:`${BASE}/api/user/sysuser/select_user`,
	  updateUserInfo:`${BASE}/api/user/sysuser/update_user`,
		
  },
  spaceServer:{
	  /* 创业资源、创业服务、孵化导师、合作企业接口*/
	  serveResource1:`${qiniuUrl}/page/serveResourceType/findlist`,
	  serveResourceList1:`${qiniuUrl}/page/serveEntrepreneurialResources/findlist`,
	  serveResourceArticle1:`${qiniuUrl}/page/serveEntrepreneurialResources/findbyid`,
	  serveResource2:`${qiniuUrl}/page/serveServiceType/findlist`,
	  serveResourceList2:`${qiniuUrl}/page/serveVentureService/findlist`,
	  serveResourceArticle2:`${qiniuUrl}/page/serveVentureService/findbyid`,
	  serveResource3:`${qiniuUrl}/page/serveTeacherType/findlist`,
	  serveResourceList3:`${qiniuUrl}/page/serveIncubatorTeacher/findlist`,
	  serveResourceArticle3:`${qiniuUrl}/page/serveIncubatorTeacher/findbyid`,
	  serveResource4:`${qiniuUrl}/page/serveCompanyType/findlist`,
	  serveResourceList4:`${qiniuUrl}/page/serveCooperativeEnterprise/findlist`,
	  serveResourceArticle4:`${qiniuUrl}/page/serveCooperativeEnterprise/findbyid`,
	  teacherDetail:`${qiniuUrl}/page/serveIncubatorTeacher/findbyid`,
	  companyDetail:`${qiniuUrl}/page/serveCooperativeEnterprise/findbyid`,
	  /* 往期活动接口*/
	  oldActivityList:`${qiniuUrl}/activity/activityBeforeActivity/findlist`,
	  oldActivityDetail:`${qiniuUrl}/activity/activityBeforeActivity/findbyid`,
	  /* 近期活动接口*/
	  newActivityList:`${qiniuUrl}/activity/activityActivityList/findlist`,
	  newActivityDetail:`${qiniuUrl}/activity/activityActivityList/findbyid`,
	  joinAct:`${qiniuUrl}/activity/activityJionCompany/add`,
	  /* 线上培训接口*/
	  getIndustryType:`${qiniuUrl}/page/activityIndustryType/findlist`,
	  getTrainList:`${qiniuUrl}/activity/activityOfflineTraining/findlist`,
	  getTrainDetail:`${qiniuUrl}/activity/activityOfflineTraining/findbyid`,
  },
  spaceNews:{
	  findNews:`${qiniuUrl}/page/news/findlist`,
	  newsDetail:`${qiniuUrl}/page/news/findbyid`
  },
  myCenter:{
	  common:{
		  getMsgNum:`${qiniuUrl}/activity/sysMsg/findMsgCount`,
		  setMsgRead:`${qiniuUrl}/activity/sysMsg/removeMsg`
	  },
	  companyInfo:{
		  search:`${BASE}api/enterprise/enterprise/enter_select_one`,
		  update:`${BASE}api/enterprise/enterprise/enter_update`
	  },
	  itemProgress:{
		  getItemList:`${qiniuUrl}/enterprise/projectInformation/findlist`,
		  itemDetail:`${qiniuUrl}/enterprise/projectInformation/findbyid`
	  },
	  infoSub:{
		  wdFind:`${BASE}api/enterprise/companyManage/select_manageTypeby_years`,
		  getManageInfo:`${BASE}api/enterprise/companyManage/select_company_manage_information`,
		  addManageInfo:`${BASE}api/enterprise/companyManage/insert_manage_information`,
		  del:`${BASE}api/enterprise/companyManage/delete_company_manage_information`
	  },
	  infoWrite:{
		  getInfo:`${BASE}api/enterprise/questionnaire_survey/select_questionnaire`,
		  up:`${BASE}api/enterprise/questionnaire_survey/upload_questionnaire_answer`
	  },
	  safeSetting:{
		  updateInfo:`${BASE}api/user/sysuser/update_user`
	  },
	  file:{
		  getFileList:`${BASE}api/enterprise/admin_file/select_file_issue`
	  },
	  sysMsg:`${qiniuUrl}/activity/msgPlatform/findlist`
  }
 
};
