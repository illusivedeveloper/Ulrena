(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{1669:function(e,t,a){"use strict";a.r(t);var n=a(775),i=a.n(n),r=a(363),o=a(364),s=a(1139),l=a(375),c=a(379),p=a(369),d=a(585),m=a(447),h=a(557),g=a(422),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(a[n[i]]=e[n[i]])}return a};var b=a(484),O=a(372),v=a(0);function z(e){let t=e.almKey;return r.createElement(O.a,{customSpinner:r.createElement("div",{className:"sonarcloud page page-limited"},r.createElement("div",{className:"huge-spacer-top text-center"},r.createElement("i",{className:"spinner"}),r.createElement("p",{className:"big-spacer-top"},Object(v.m)("onboarding.import_organization.installing",t?Object(v.l)(Object(g.h)(t)):"ALM"))))})}var f=a(358),E=a(958),j=a(383),_=a(365);class y extends r.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleChange=(e=>{let t=e.key;this.setState({organization:t})}),this.handleSubmit=(e=>{e.preventDefault();const t=this.state.organization;t&&(this.setState({submitting:!0}),this.props.onBindOrganization(t).then(this.stopSubmitting,this.stopSubmitting))}),this.stopSubmitting=(()=>{this.mounted&&this.setState({submitting:!1})}),this.state={organization:this.getInitialSelectedOrganization(e),submitting:!1}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}getInitialSelectedOrganization(e){return 1===e.unboundOrganizations.length?e.unboundOrganizations[0].key:""}render(){const e=this.props.almKey,t=this.state,a=t.organization,n=t.submitting;return r.createElement("form",{id:"bind-organization-form",onSubmit:this.handleSubmit},r.createElement(E.a,{onChange:this.handleChange,organization:a,organizations:this.props.unboundOrganizations}),Object(g.e)(e)&&r.createElement(j.a,{className:"abs-width-400 big-spacer-top",display:"block",variant:"info"},Object(v.m)("onboarding.import_organization.bind_members_not_sync_info_x",Object(v.l)("organization",e)),r.createElement(p.Link,{className:"spacer-left",target:"_blank",to:{pathname:"/documentation/organizations/manage-team/"}},Object(v.l)("learn_more"))),r.createElement("div",{className:"display-flex-center big-spacer-top"},r.createElement(_.i,{disabled:n||!a},Object(v.l)("onboarding.import_organization.bind")),n&&r.createElement(O.a,{className:"spacer-left"})))}}var N=a(389),C=a(546),S=a(719),k=a(522);class x extends r.PureComponent{constructor(){super(...arguments),this.state={error:void 0,editing:!1,touched:!1,value:""},this.handleChange=(e=>{const t=e.currentTarget.value.trim(),a=this.validateUrl(t);this.setState({error:a,touched:!0,value:t}),this.props.onChange(void 0===a?t:void 0)}),this.handleBlur=(()=>{this.setState({editing:!1})}),this.handleFocus=(()=>{this.setState({editing:!0})})}componentDidMount(){if(this.props.initialValue){const e=this.props.initialValue,t=this.validateUrl(e);this.setState({error:t,touched:Boolean(t),value:e})}}validateUrl(e){if(e.length>0&&!Object(C.isWebUri)(e))return Object(v.l)("onboarding.create_organization.url.error")}render(){const e=this.state.touched&&!this.state.editing&&void 0!==this.state.error,t=void 0===this.state.error&&""!==this.state.value,a=this.state.touched&&t;return r.createElement(S.a,{description:Object(v.l)("onboarding.create_organization.avatar.description"),error:this.state.error,id:"organization-avatar",isInvalid:e,isValid:a,label:Object(v.l)("onboarding.create_organization.avatar")},r.createElement(r.Fragment,null,(t||this.props.name)&&r.createElement(k.a,{className:"display-block spacer-bottom",organization:{avatar:t?this.state.value:void 0,name:this.props.name||""}}),r.createElement("input",{className:o("input-super-large","text-middle",{"is-invalid":e,"is-valid":a}),id:"organization-avatar",onBlur:this.handleBlur,onChange:this.handleChange,onFocus:this.handleFocus,placeholder:Object(v.l)("onboarding.create_organization.avatar.placeholder"),type:"text",value:this.state.value})))}}var I=a(424),P=a.n(I),F=a(370);class U extends r.PureComponent{constructor(e){super(e),this.mounted=!1,this.checkFreeKey=(e=>(this.setState({validating:!0}),Object(m.d)(e).then(t=>{this.mounted&&(void 0===t?(this.setState({error:void 0,validating:!1}),this.props.onChange(e)):(this.setState({error:Object(v.l)("onboarding.create_organization.organization_name.taken"),touched:!0,validating:!1}),this.props.onChange(void 0)))}).catch(()=>{this.mounted&&(this.setState({error:void 0,validating:!1}),this.props.onChange(e))}))),this.handleChange=(e=>{const t=e.currentTarget.value;this.setState({touched:!0,value:t}),this.validateKey(t)}),this.state={error:void 0,touched:!1,validating:!1,value:""},this.checkFreeKey=P()(this.checkFreeKey,250)}componentDidMount(){this.mounted=!0,void 0!==this.props.initialValue&&(this.setState({value:this.props.initialValue}),this.validateKey(this.props.initialValue))}componentWillUnmount(){this.mounted=!1}validateKey(e){e.length>255||!/^[a-z0-9][a-z0-9-]*[a-z0-9]?$/.test(e)?(this.setState({error:Object(v.l)("onboarding.create_organization.organization_name.error"),touched:!0}),this.props.onChange(void 0)):this.checkFreeKey(e)}render(){const e=this.state.touched&&void 0!==this.state.error,t=this.state.touched&&!this.state.validating&&void 0===this.state.error;return r.createElement(S.a,{error:this.state.error,id:"organization-key",isInvalid:e,isValid:t,label:Object(v.l)("onboarding.create_organization.organization_name"),required:!0},r.createElement("div",{className:"display-inline-flex-baseline"},r.createElement("span",{className:"little-spacer-right"},Object(F.l)().replace(/https*:\/\//,"")+"/organizations/"),r.createElement("input",{autoFocus:!0,className:o("input-super-large",{"is-invalid":e,"is-valid":t}),id:"organization-key",maxLength:255,onChange:this.handleChange,type:"text",value:this.state.value})))}}class A extends r.PureComponent{constructor(){super(...arguments),this.state={error:void 0,editing:!1,touched:!1,value:""},this.handleChange=(e=>{const t=e.currentTarget.value.trim(),a=this.validateUrl(t);this.setState({error:a,touched:!0,value:t}),this.props.onChange(void 0===a?t:void 0)}),this.handleBlur=(()=>{this.setState({editing:!1})}),this.handleFocus=(()=>{this.setState({editing:!0})})}componentDidMount(){if(this.props.initialValue){const e=this.props.initialValue,t=this.validateUrl(e);this.setState({error:t,touched:Boolean(t),value:e})}}validateUrl(e){if(e.length>0&&!Object(C.isWebUri)(e))return Object(v.l)("onboarding.create_organization.url.error")}render(){const e=this.state.touched&&!this.state.editing&&void 0!==this.state.error,t=this.state.touched&&void 0===this.state.error&&""!==this.state.value;return r.createElement(S.a,{error:this.state.error,id:"organization-url",isInvalid:e,isValid:t,label:Object(v.l)("onboarding.create_organization.url")},r.createElement("input",{className:o("input-super-large","text-middle",{"is-invalid":e,"is-valid":t}),id:"organization-url",onBlur:this.handleBlur,onChange:this.handleChange,onFocus:this.handleFocus,type:"text",value:this.state.value}))}}class D extends r.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleAdditionalClick=(()=>{this.setState(e=>({additional:!e.additional}))}),this.handleAvatarUpdate=(e=>{this.setState({avatar:e})}),this.handleDescriptionUpdate=(e=>{this.setState({description:e.currentTarget.value})}),this.handleKeyUpdate=(e=>{this.setState({key:e})}),this.handleNameUpdate=(e=>{this.setState({name:e.currentTarget.value})}),this.handleUrlUpdate=(e=>{this.setState({url:e})}),this.handleSubmit=(e=>{e.preventDefault();const t=this.state;this.canSubmit(t)&&(this.setState({submitting:!0}),this.props.onContinue({avatar:t.avatar,description:t.description,key:t.key,name:t.name,url:t.url}).then(this.stopSubmitting,this.stopSubmitting))}),this.stopSubmitting=(()=>{this.mounted&&this.setState({submitting:!1})});const t=e.organization;this.state={additional:!1,avatar:t&&t.avatar||"",description:t&&t.description||"",key:t&&t.key||void 0,name:t&&t.name||"",submitting:!1,url:t&&t.url||""}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}canSubmit(e){return Boolean(void 0!==e.key&&void 0!==e.name&&void 0!==e.description&&void 0!==e.avatar&&void 0!==e.url)}render(){const e=this.state.submitting,t=this.props,a=t.infoBlock,n=t.keyReadOnly;return r.createElement("form",{id:"organization-form",onSubmit:this.handleSubmit},!n&&r.createElement(U,{initialValue:this.state.key,onChange:this.handleKeyUpdate}),r.createElement("div",{className:"big-spacer-top"},r.createElement(_.h,{onClick:this.handleAdditionalClick},Object(v.l)(this.state.additional?"onboarding.create_organization.hide_additional_info":"onboarding.create_organization.add_additional_info"),r.createElement(N.a,{className:"little-spacer-left",turned:this.state.additional}))),r.createElement("div",{className:"js-additional-info",hidden:!this.state.additional},r.createElement("div",{className:"big-spacer-top"},r.createElement("label",{htmlFor:"organization-display-name"},r.createElement("strong",null,Object(v.l)("onboarding.create_organization.display_name"))),r.createElement("div",{className:"little-spacer-top"},r.createElement("input",{className:"input-super-large text-middle",id:"organization-display-name",maxLength:255,onChange:this.handleNameUpdate,type:"text",value:this.state.name})),r.createElement("div",{className:"note abs-width-400"},Object(v.l)("onboarding.create_organization.display_name.description"))),r.createElement("div",{className:"big-spacer-top"},r.createElement(x,{initialValue:this.state.avatar,name:this.state.name,onChange:this.handleAvatarUpdate})),r.createElement("div",{className:"big-spacer-top"},r.createElement("label",{htmlFor:"organization-description"},r.createElement("strong",null,Object(v.l)("onboarding.create_organization.description"))),r.createElement("div",{className:"little-spacer-top"},r.createElement("textarea",{className:"input-super-large text-middle",id:"organization-description",maxLength:256,onChange:this.handleDescriptionUpdate,rows:3,value:this.state.description}))),r.createElement("div",{className:"big-spacer-top"},r.createElement(A,{initialValue:this.state.url,onChange:this.handleUrlUpdate}))),a,r.createElement("div",{className:"display-flex-center big-spacer-top"},r.createElement(_.i,{disabled:e||!this.canSubmit(this.state)},this.props.submitText),e&&r.createElement(O.a,{className:"spacer-left"})))}}var w=a(663),T=a(543);class M extends r.PureComponent{constructor(){super(...arguments),this.renderForm=(()=>r.createElement("div",{className:"boxed-group-inner"},this.props.children)),this.renderResult=(()=>{const e=this.props.organization;return e?r.createElement("div",{className:"boxed-group-actions display-flex-center"},r.createElement(T.a,{className:"spacer-right"}),r.createElement("strong",{className:"text-limited"},e.key)):null})}render(){return r.createElement(w.a,{finished:this.props.finished,onOpen:this.props.onOpen,open:this.props.open,renderForm:this.renderForm,renderResult:this.renderResult,stepNumber:1,stepTitle:this.props.stepTitle||Object(v.l)("onboarding.create_organization.enter_org_details")})}}var B=a(624),K=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(a[n[i]]=e[n[i]])}return a};function R(e){var t=e.almName,a=e.hasWarning,n=K(e,["almName","hasWarning"]);const i=t&&n.disabled,o=t&&a&&!n.disabled;return r.createElement(B.a,Object.assign({title:Object(v.l)("billing.free_plan.title"),titleInfo:Object(b.f)(0)},n),r.createElement("div",{className:"spacer-left"},r.createElement("ul",{className:"big-spacer-left note"},r.createElement("li",{className:"little-spacer-bottom"},Object(v.l)("billing.free_plan.all_projects_analyzed_public")),r.createElement("li",null,Object(v.l)("billing.free_plan.anyone_can_browse_source_code")))),o&&r.createElement(j.a,{variant:"warning"},r.createElement(f.FormattedMessage,{defaultMessage:Object(v.l)("billing.free_plan.private_repo_warning"),id:"billing.free_plan.private_repo_warning",values:{alm:t}})),i&&r.createElement(j.a,{variant:"info"},r.createElement(f.FormattedMessage,{defaultMessage:Object(v.l)("billing.free_plan.not_available_info"),id:"billing.free_plan.not_available_info",values:{alm:t}})))}var V,L=a(607),q=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(a[n[i]]=e[n[i]])}return a};function W(e){var t=e.isRecommended,a=e.startingPrice,n=q(e,["isRecommended","startingPrice"]);return r.createElement(B.a,Object.assign({recommended:t?Object(v.l)("billing.paid_plan.recommended"):void 0,title:Object(v.l)("billing.paid_plan.title"),titleInfo:void 0!==a&&r.createElement(f.FormattedMessage,{defaultMessage:Object(v.l)("billing.price_from_x"),id:"billing.price_from_x",values:{price:r.createElement("span",{className:"big"},Object(b.f)(a))}})},n),r.createElement(L.a,null),r.createElement("div",{className:"big-spacer-left"},r.createElement(p.Link,{className:"spacer-left",target:"_blank",to:"/about/pricing"},Object(v.l)("billing.pricing.learn_more"))))}!function(e){e.Free="free",e.Paid="paid"}(V||(V={}));class H extends r.PureComponent{constructor(){super(...arguments),this.handleFreePlanClick=(()=>{this.props.onChange(V.Free)}),this.handlePaidPlanClick=(()=>{this.props.onChange(V.Paid)})}render(){const e=this.props,t=e.almApplication,a=e.almOrganization,n=e.plan,i=Boolean(a&&a.privateRepos>0),o=Boolean(i&&a&&0===a.publicRepos),s=[r.createElement(W,{isRecommended:i,key:"paid",onClick:this.handlePaidPlanClick,selected:n===V.Paid,startingPrice:this.props.startingPrice}),r.createElement(R,{almName:t&&t.name,disabled:o,hasWarning:i&&n===V.Free,key:"free",onClick:this.handleFreePlanClick,selected:n===V.Free})];return r.createElement("div",{"aria-label":Object(v.l)("onboarding.create_organization.choose_plan"),className:"display-flex-row huge-spacer-bottom",role:"radiogroup"},i?s:s.reverse())}}var J=a(720),Q=a(510),G=a(435);const $=Object(Q.a)(J.a);class X extends r.PureComponent{constructor(e){super(e),this.mounted=!1,this.handlePlanChange=(e=>{this.setState({plan:e})}),this.stopSubmitting=(()=>{this.mounted&&this.setState({submitting:!1})}),this.handleFreePlanSubmit=(e=>(e.preventDefault(),this.setState({submitting:!0}),this.props.createOrganization().then(()=>{this.props.onDone(),this.stopSubmitting()},this.stopSubmitting))),this.renderForm=(()=>{const e=this.state.submitting,t=this.props.subscriptionPlans,a=t&&t[0]&&t[0].price;return r.createElement("div",{className:"boxed-group-inner"},this.state.ready&&r.createElement(r.Fragment,null,r.createElement(H,{almApplication:this.props.almApplication,almOrganization:this.props.almOrganization,onChange:this.handlePlanChange,plan:this.state.plan,startingPrice:a}),this.state.plan===V.Paid?r.createElement($,{onCommit:this.props.onDone,onFailToUpgrade:this.props.onUpgradeFail,organizationKey:this.props.createOrganization,subscriptionPlans:this.props.subscriptionPlans},e=>{let t=e.onSubmit,a=e.renderFormFields,n=e.renderSubmitGroup;return r.createElement("form",{id:"organization-paid-plan-form",onSubmit:t},a(),r.createElement("div",{className:"billing-input-large big-spacer-top"},n(Object(v.l)("onboarding.create_organization.create_and_upgrade"))))}):r.createElement("form",{className:"display-flex-center big-spacer-top",id:"organization-free-plan-form",onSubmit:this.handleFreePlanSubmit},r.createElement(_.i,{disabled:e},Object(v.l)("my_account.create_organization")),e&&r.createElement(O.a,{className:"spacer-left"}))))}),this.state={plan:e.almOrganization&&e.almOrganization.privateRepos>0?V.Paid:V.Free,ready:!1,submitting:!1}}componentDidMount(){this.mounted=!0,Object(G.a)("billing/billing").then(()=>{this.mounted&&this.setState({ready:!0})},()=>{})}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.almOrganization,t=Object(v.l)(e&&e.privateRepos>0&&0===e.publicRepos?"onboarding.create_organization.enter_payment_details":"onboarding.create_organization.choose_plan");return r.createElement(w.a,{finished:!1,onOpen:()=>{},open:this.props.open,renderForm:this.renderForm,renderResult:()=>null,stepNumber:2,stepTitle:t})}}var Y,Z=a(451);!function(e){e.Bind="bind",e.Create="create"}(Y||(Y={}));class ee extends r.PureComponent{constructor(e){super(e),this.handleBindOrganization=(e=>Object(d.a)({organization:e,installationId:this.props.almInstallId}).then(()=>this.props.onOrgCreated(e))),this.handleCreateOrganization=(()=>{const e=this.props,t=e.almApplication,a=e.almOrganization,n=e.organization;return n?this.props.createOrganization(Object.assign({},n,{alm:{key:t.key,membersSync:!0,url:a.almUrl},installationId:this.props.almInstallId})):Promise.reject()}),this.handleOptionChange=(e=>{this.setState({filter:e})}),this.state={filter:0===e.unboundOrganizations.length?Y.Create:void 0}}render(){const e=this.props,t=e.almApplication,a=e.almOrganization,n=e.className,i=e.organization,o=e.step,s=e.subscriptionPlans,l=e.unboundOrganizations,c=this.state.filter,p=l.length>0,d=Object(g.h)(t.key);return r.createElement("div",{className:n},r.createElement(M,{finished:void 0!==i,onOpen:this.props.handleOrgDetailsStepOpen,open:o===b.e.OrganizationDetails,organization:i,stepTitle:Object(v.l)("onboarding.import_organization.import_org_details")},r.createElement("div",{className:"huge-spacer-bottom"},r.createElement("p",{className:"display-flex-center big-spacer-bottom"},r.createElement(f.FormattedMessage,{defaultMessage:Object(v.l)("onboarding.import_organization_x"),id:"onboarding.import_organization_x",values:{avatar:r.createElement("img",{alt:t.name,className:"little-spacer-left",src:"".concat(Object(F.b)(),"/images/sonarcloud/").concat(Object(g.h)(t.key),".svg"),width:16}),name:r.createElement("strong",null,a.name)}}),r.createElement(_.d,{className:"little-spacer-left",onClick:this.props.handleCancelImport})),p&&r.createElement(Z.a,{name:"filter",onCheck:this.handleOptionChange,options:[{label:Object(v.l)("onboarding.import_organization.create_new"),value:Y.Create},{label:Object(v.l)("onboarding.import_organization.bind_existing"),value:Y.Bind}],value:c})),c===Y.Create&&r.createElement(D,{infoBlock:Object(g.e)(d)&&r.createElement(j.a,{className:"abs-width-600 big-spacer-top",display:"block",variant:"info"},r.createElement("p",null,Object(v.m)("onboarding.import_organization.members_sync_info_x",Object(v.l)("organization",d),a.name,Object(v.l)(d))),r.createElement("a",{href:Object(g.a)(t.key,a.almUrl),rel:"noopener noreferrer",target:"_blank"},Object(v.m)("organization.members.see_all_members_on_x",Object(v.l)(d)))),onContinue:this.props.handleOrgDetailsFinish,organization:a,submitText:Object(v.l)("continue")}),c===Y.Bind&&r.createElement(y,{almKey:d,onBindOrganization:this.handleBindOrganization,unboundOrganizations:l})),void 0!==s&&c!==Y.Bind&&r.createElement(X,{almApplication:this.props.almApplication,almOrganization:this.props.almOrganization,createOrganization:this.handleCreateOrganization,onDone:this.props.onDone,onUpgradeFail:this.props.onUpgradeFail,open:o===b.e.Plan,subscriptionPlans:s}))}}class te extends r.PureComponent{constructor(){super(...arguments),this.handleCreateOrganization=(()=>{const e=this.props.organization;return e?this.props.updateOrganization(Object.assign({},e,{installationId:this.props.almInstallId})):Promise.reject()}),this.handleOrgDetailsFinish=(e=>this.props.handleOrgDetailsFinish(Object.assign({},e,{key:this.props.importPersonalOrg.key})))}render(){const e=this.props,t=e.almApplication,a=e.importPersonalOrg,n=e.organization,i=e.step,o=e.subscriptionPlans;return r.createElement(r.Fragment,null,r.createElement(M,{finished:void 0!==n,onOpen:this.props.handleOrgDetailsStepOpen,open:i===b.e.OrganizationDetails,organization:n,stepTitle:Object(v.l)("onboarding.import_organization.personal.import_org_details")},r.createElement("div",{className:"display-flex-center big-spacer-bottom"},r.createElement(f.FormattedMessage,{defaultMessage:Object(v.l)("onboarding.import_personal_organization_x"),id:"onboarding.import_personal_organization_x",values:{avatar:r.createElement("img",{alt:t.name,className:"little-spacer-left",src:"".concat(Object(F.b)(),"/images/sonarcloud/").concat(Object(g.h)(t.key),".svg"),width:16}),name:r.createElement("strong",null,this.props.almOrganization.name),personalAvatar:a&&r.createElement(k.a,{organization:a,small:!0}),personalName:a&&r.createElement("strong",null,a.name)}}),r.createElement(_.d,{className:"little-spacer-left",onClick:this.props.handleCancelImport})),r.createElement(D,{keyReadOnly:!0,onContinue:this.handleOrgDetailsFinish,organization:a,submitText:Object(v.l)("continue")})),void 0!==o&&r.createElement(X,{almApplication:this.props.almApplication,almOrganization:this.props.almOrganization,createOrganization:this.handleCreateOrganization,onDone:this.props.onDone,open:i===b.e.Plan,subscriptionPlans:o}))}}class ae extends r.PureComponent{constructor(){super(...arguments),this.handleCreateOrganization=(()=>{const e=this.props.organization;return e?this.props.createOrganization(e):Promise.reject()})}render(){const e=this.props,t=e.className,a=e.organization,n=e.subscriptionPlans;return r.createElement("div",{className:t},r.createElement(M,{finished:void 0!==a,onOpen:this.props.handleOrgDetailsStepOpen,open:this.props.step===b.e.OrganizationDetails,organization:a},r.createElement(D,{onContinue:this.props.handleOrgDetailsFinish,organization:a,submitText:Object(v.l)("continue")})),void 0!==n&&r.createElement(X,{createOrganization:this.handleCreateOrganization,onDone:this.props.onDone,onUpgradeFail:this.props.onUpgradeFail,open:this.props.step===b.e.Plan,subscriptionPlans:n}))}}var ne=a(380),ie=a.n(ne),re=a(632),oe=a(384),se=a(1);var le=Object(p.withRouter)(class extends r.PureComponent{constructor(){super(...arguments),this.state={unboundInstallationId:""},this.handleSubmit=(e=>{e.preventDefault();const t=this.state.unboundInstallationId;t&&this.props.router.push({pathname:"/create-organization",query:Object(b.h)({almInstallId:t,almKey:this.props.almApplication.key})})}),this.handleInstallAppClick=(()=>{Object(se.c)(b.c,Date.now().toString(10))}),this.handleInstallationChange=(e=>{let t=e.installationId;this.setState({unboundInstallationId:t})}),this.renderOption=(e=>{const t=this.props.almApplication;return r.createElement("span",null,r.createElement("img",{alt:t.name,className:"spacer-right",height:14,src:"".concat(Object(F.b)(),"/images/sonarcloud/").concat(Object(g.h)(t.key),".svg")}),e.name)})}render(){const e=this.props,t=e.almApplication,a=e.almInstallId,n=e.almOrganization,i=e.almUnboundApplications,s=e.boundOrganization,l=e.className,c=this.state.unboundInstallationId;return r.createElement("div",{className:o("boxed-group",l)},r.createElement("div",{className:"boxed-group-header"},r.createElement("h2",null,Object(v.l)("onboarding.import_organization.import_org_details"))),r.createElement("div",{className:"boxed-group-inner"},a&&!n&&r.createElement(j.a,{className:"big-spacer-bottom width-60",variant:"error"},r.createElement("div",{className:"markdown"},Object(v.l)("onboarding.import_organization.org_not_found"),r.createElement("ul",null,r.createElement("li",null,Object(v.l)("onboarding.import_organization.org_not_found.tips_1")),r.createElement("li",null,Object(v.l)("onboarding.import_organization.org_not_found.tips_2"))))),n&&s&&r.createElement(j.a,{className:"big-spacer-bottom width-60",variant:"error"},r.createElement(f.FormattedMessage,{defaultMessage:Object(v.l)("onboarding.import_organization.already_bound_x"),id:"onboarding.import_organization.already_bound_x",values:{avatar:r.createElement("img",{alt:t.name,className:"little-spacer-left",src:"".concat(Object(F.b)(),"/images/sonarcloud/").concat(Object(g.h)(t.key),".svg"),width:16}),name:r.createElement("strong",null,n.name),boundAvatar:r.createElement(k.a,{className:"little-spacer-left",organization:s,small:!0}),boundName:r.createElement("strong",null,s.name)}})),r.createElement("div",{className:"display-flex-center"},r.createElement("div",{className:"display-inline-block"},r.createElement(re.a,{className:"display-inline-block",identityProvider:t,onClick:this.handleInstallAppClick,small:!0,url:t.installationUrl},Object(v.l)("onboarding.import_organization.choose_organization_button",t.key))),i.length>0&&r.createElement("div",{className:"display-flex-stretch"},r.createElement("div",{className:"vertical-pipe-separator"},r.createElement("div",{className:"vertical-separator "}),r.createElement("span",{className:"note"},Object(v.l)("or")),r.createElement("div",{className:"vertical-separator"})),r.createElement("form",{className:"big-spacer-top big-spacer-bottom",onSubmit:this.handleSubmit},r.createElement("div",{className:"form-field abs-width-400"},r.createElement("label",{className:"text-normal",htmlFor:"select-unbound-installation"},Object(v.m)("onboarding.import_organization.choose_unbound_installation_x",Object(v.l)(Object(g.h)(t.key)))),r.createElement(oe.c,{className:"input-super-large",clearable:!1,id:"select-unbound-installation",labelKey:"name",onChange:this.handleInstallationChange,optionRenderer:this.renderOption,options:ie()(i,e=>e.name.toLowerCase()),placeholder:Object(v.l)("onboarding.import_organization.choose_organization"),value:c,valueKey:"installationId",valueRenderer:this.renderOption})),r.createElement(_.i,{disabled:!c},Object(v.l)("continue")))))))}}),ce=a(399),pe=a(959),de=a(525),me=a(633),he=a(634),ge=a(635),ue=a(401),be=a(631),Oe=a(495),ve=a(441);a(562);a.d(t,"CreateOrganization",function(){return ze});class ze extends r.PureComponent{constructor(){var e;super(...arguments),e=this,this.mounted=!1,this.state={almOrgLoading:!1,almUnboundApplications:[],bindingExistingOrg:!1,loading:!0,step:b.e.OrganizationDetails},this.deleteOrganization=(()=>{this.state.organization&&this.props.deleteOrganization(this.state.organization.key)}),this.fetchAlmApplication=(()=>Object(d.b)().then(e=>{let t=e.application;this.mounted&&this.setState({almApplication:t})})),this.fetchAlmOrganization=(e=>(this.setState({almOrgLoading:!0}),Object(d.c)({installationId:e}).then(e=>{let t=e.almOrganization,a=e.boundOrganization;return a?Promise.resolve({almOrganization:t,boundOrganization:a}):this.setValidOrgKey(t)}).then(e=>{let t=e.almOrganization,a=e.boundOrganization;this.mounted&&(a&&a.key&&!this.isStoredTimestampValid(b.c)?this.props.router.push({pathname:Object(F.r)(a.key)}):this.setState({almOrganization:t,almOrgLoading:!1,boundOrganization:a}))},()=>{this.mounted&&this.setState({almOrgLoading:!1})}))),this.fetchAlmUnboundApplications=(()=>Object(d.e)().then(e=>{this.mounted&&this.setState({almUnboundApplications:e})})),this.fetchSubscriptionPlans=(()=>Object(ge.a)().then(e=>{this.mounted&&this.setState({subscriptionPlans:e})})),this.handleCancelImport=(()=>{this.updateUrlQuery({almInstallId:void 0,almKey:void 0})}),this.handleOrgCreated=(e=>{this.props.skipOnboarding(),this.isStoredTimestampValid(b.d)?this.props.router.push({pathname:"/projects/create",state:{organization:e,tab:this.state.almOrganization?"auto":"manual"}}):this.props.router.push({pathname:Object(F.r)(e)})}),this.handleOrgDetailsFinish=(e=>(this.setState({organization:e,step:b.e.Plan}),Promise.resolve())),this.handleOrgDetailsStepOpen=(()=>{this.setState({step:b.e.OrganizationDetails})}),this.handlePlanDone=(()=>{this.state.organization&&this.handleOrgCreated(this.state.organization.key)}),this.isStoredTimestampValid=(e=>{const t=Object(se.a)(e);return Object(se.b)(e),t&&Object(s.differenceInMinutes)(Date.now(),Number(t))<10}),this.onTabChange=(e=>{this.updateUrlState({tab:e})}),this.getHeader=((e,t)=>e?Object(v.l)("onboarding.binding_organization"):t?Object(v.l)("onboarding.import_organization.personal.page.header"):Object(v.l)("onboarding.create_organization.page.header")),this.setValidOrgKey=(e=>{const t=Object(be.c)(e.key),a=[t,...i()(9,e=>"".concat(t,"-").concat(e+1))];return m.g({organizations:a.join(",")}).then(e=>{let n=e.organizations;return a.find(e=>!n.find(t=>t.key===e))||"".concat(t,"-").concat(Math.ceil(1e3*Math.random())+10)},()=>t).then(t=>({almOrganization:Object.assign({},e,{key:t})}))}),this.stopLoading=(()=>{this.mounted&&this.setState({loading:!1})}),this.updateUrlQuery=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.props.router.push({pathname:e.props.location.pathname,query:Object(b.h)(Object.assign({},Object(b.g)(e.props.location.query),t)),state:e.props.location.state})},this.updateUrlState=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.props.router.replace({pathname:e.props.location.pathname,query:e.props.location.query,state:Object.assign({},e.props.location.state||{},t)})},this.renderContent=((e,t)=>{const a=this.props,n=a.currentUser,i=a.location,s=this.state,l=s.organization,c=s.step,p=s.subscriptionPlans,d=(i.state||{}).tab,m=void 0===d?"auto":d,h={handleOrgDetailsFinish:this.handleOrgDetailsFinish,handleOrgDetailsStepOpen:this.handleOrgDetailsStepOpen,onDone:this.handlePlanDone,organization:l,step:c,subscriptionPlans:p};if(!this.hasAutoImport(s))return r.createElement(ae,Object.assign({},h,{createOrganization:this.props.createOrganization,onUpgradeFail:this.deleteOrganization,organization:this.state.organization,step:this.state.step}));const u=s.almApplication,b=s.almOrganization,O=s.boundOrganization;return t&&b&&u?r.createElement(te,Object.assign({},h,{almApplication:u,almInstallId:e,almOrganization:b,handleCancelImport:this.handleCancelImport,importPersonalOrg:t,subscriptionPlans:p,updateOrganization:this.props.updateOrganization})):r.createElement(r.Fragment,null,r.createElement(pe.a,{onChange:this.onTabChange,selected:m||"auto",tabs:[{key:"auto",node:Object(v.m)("onboarding.import_organization.import_from_x",Object(v.l)(Object(g.h)(u.key)))},{key:"manual",node:Object(v.l)("onboarding.create_organization.create_manually")}]}),r.createElement(ae,Object.assign({},h,{className:o({hidden:"manual"!==m&&this.hasAutoImport(s)}),createOrganization:this.props.createOrganization,onUpgradeFail:this.deleteOrganization})),e&&b&&!O?r.createElement(ee,Object.assign({},h,{almApplication:u,almInstallId:e,almOrganization:b,className:o({hidden:"auto"!==m}),createOrganization:this.props.createOrganization,handleCancelImport:this.handleCancelImport,onOrgCreated:this.handleOrgCreated,onUpgradeFail:this.deleteOrganization,unboundOrganizations:this.props.userOrganizations.filter(e=>{let t=e.actions,a=void 0===t?{}:t,i=e.alm,r=e.key;return!i&&r!==n.personalOrganization&&a.admin})})):r.createElement(le,{almApplication:u,almInstallId:e,almOrganization:b,almUnboundApplications:s.almUnboundApplications,boundOrganization:O,className:o({hidden:"auto"!==m})}))})}componentDidMount(){this.mounted=!0,Object(ue.b)();const e=Object(b.g)(this.props.location.query);if(Object(g.c)(this.props.currentUser)&&e.almInstallId&&this.isStoredTimestampValid(b.b))this.bindAndRedirectToOrganizationSettings(e.almInstallId);else{const t=[this.fetchSubscriptionPlans()];Object(g.c)(this.props.currentUser)&&(t.push(this.fetchAlmApplication()),e.almInstallId?this.fetchAlmOrganization(e.almInstallId):t.push(this.fetchAlmUnboundApplications())),Promise.all(t).then(this.stopLoading,this.stopLoading)}}componentDidUpdate(e){const t=Object(b.g)(e.location.query),a=Object(b.g)(this.props.location.query);this.state.almApplication&&t.almInstallId!==a.almInstallId&&(a.almInstallId?this.fetchAlmOrganization(a.almInstallId):(this.setState({almOrganization:void 0,boundOrganization:void 0,loading:!0}),this.fetchAlmUnboundApplications().then(this.stopLoading,this.stopLoading)))}componentWillUnmount(){this.mounted=!1,Object(ue.d)()}hasAutoImport(e){return Boolean(e.almApplication)}bindAndRedirectToOrganizationSettings(e){const t=Object(se.a)(b.a)||"";Object(se.b)(b.a),this.setState({bindingExistingOrg:!0}),Object(d.a)({installationId:e,organization:t}).then(()=>{this.props.router.push({pathname:"/organizations/".concat(t)}),Object(ve.a)(Object(v.l)("organization.bind.success"))},()=>{})}render(){const e=this.props,t=e.currentUser,a=e.location,n=Object(b.g)(a.query);if(this.state.almOrgLoading)return r.createElement(z,{almKey:n.almKey});const i=this.state,o=i.almOrganization,s=i.bindingExistingOrg,l=i.subscriptionPlans,p=Object(g.f)(o)?this.props.userOrganizations.find(e=>e.key===t.personalOrganization):void 0,d=this.getHeader(s,!!p),m=l&&l[0]&&l[0].price;return r.createElement(r.Fragment,null,r.createElement(c.Helmet,{title:d,titleTemplate:"%s"}),r.createElement("div",{className:"page page-limited huge-spacer-top huge-spacer-bottom"},r.createElement(ce.a,{anchor:"create_org_main"}),r.createElement("header",{className:"page-header huge-spacer-bottom"},r.createElement("h1",{className:"page-title huge big-spacer-bottom"},r.createElement("strong",null,d)),!p&&void 0!==m&&r.createElement("p",{className:"page-description"},Object(v.l)("onboarding.create_organization.page.description"))),this.state.loading?r.createElement(O.a,null):this.renderContent(n.almInstallId,p)))}}const fe={createOrganization:function(e){var t=e.alm,a=u(e,["alm"]);return e=>m.b(Object.assign({},a,{name:a.name||a.key})).then(a=>(e(h.a(Object.assign({},a,{alm:t}))),t&&t.membersSync&&Object(g.e)(t.key)&&m.k(a.key),a.key))},deleteOrganization:he.a,updateOrganization:function(e){return t=>{const a=e.key,n=e.installationId,i=u(e,["key","installationId"]),r=[m.l(a,i)];return n&&r.push(Object(d.a)({organization:a,installationId:n})),Promise.all(r).then(()=>(t(h.h(a,i)),e.key))}},skipOnboarding:Oe.g};t.default=Object(de.a)(Object(me.a)(Object(p.withRouter)(Object(l.connect)(null,fe)(ze))))},441:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(426),i=a(418);function r(e){Object(n.default)().dispatch(i.b(e))}},451:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(363),i=a(364),r=a(373);class o extends n.PureComponent{constructor(){super(...arguments),this.handleChange=(e=>{const t=e.currentTarget.value;this.props.onCheck(t)}),this.renderOption=(e=>{const t=e.value===this.props.value,a=this.props.name+"__"+e.value;return n.createElement("li",{key:e.value},n.createElement("input",{checked:t,disabled:e.disabled,id:a,name:this.props.name,onChange:this.handleChange,type:"radio",value:e.value}),n.createElement(r.a,{overlay:e.tooltip||void 0},n.createElement("label",{htmlFor:a},e.label)))})}render(){return n.createElement("ul",{className:i("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))}}o.defaultProps={disabled:!1,value:null}},562:function(e,t,a){var n=a(563);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(367)(n,i);n.locals&&(e.exports=n.locals)},563:function(e,t,a){(e.exports=a(366)(!1)).push([e.i,".onboarding-step{position:relative;padding-left:34px}.onboarding-step:not(.is-open):not(.is-finished){opacity:.4}.onboarding-step .boxed-group-actions{height:24px;line-height:24px}.onboarding-step hr{margin-left:-54px}.onboarding-step-number{position:absolute;top:15px;left:15px;width:24px;height:24px;line-height:24px;border-radius:24px;background-color:#b9b9b9;color:#fff;font-size:14px;text-align:center}.onboarding-step.is-open .onboarding-step-number{background-color:#236a97}.onboarding-step.is-finished{cursor:pointer;outline:none}",""])},634:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return l});var n=a(447),i=a(557),r=a(418),o=a(0);function s(e,t){return a=>n.l(e,t).then(()=>{a(i.h(e,t)),a(Object(r.b)(Object(o.l)("organization.updated")))})}function l(e){return t=>n.c(e).then(()=>{t(i.c(e))})}},663:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(363),i=a(364);function r(e){const t=i("boxed-group","onboarding-step",{"is-open":e.open,"is-finished":e.finished}),a=!e.open&&e.finished;return n.createElement("div",{className:t,onClick:a?t=>{t.preventDefault(),e.onOpen()}:void 0,role:a?"button":void 0,tabIndex:a?0:void 0},n.createElement("div",{className:"onboarding-step-number"},e.stepNumber),!e.open&&e.renderResult(),n.createElement("div",{className:"boxed-group-header"},n.createElement("h2",null,e.stepTitle)),!e.open&&n.createElement("div",{className:"boxed-group-inner"}),n.createElement("div",{className:i({hidden:!e.open})},e.renderForm()))}}}]);
//# sourceMappingURL=334.m.157f6763.chunk.js.map