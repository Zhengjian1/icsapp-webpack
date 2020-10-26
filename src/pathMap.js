const pages = [
    {
        name: 'search',
        auth: true,
    },
    {
        name: 'service-calendar',
        auth: true,
    },
    {
        name: 'contact-saler',
    },
    {
        name: 'res-report-clazz',
        auth: true,
        role: true,
    },
    {
        name: 'res-report-detail',
        auth: true,
        role: true,
    },
    {
        name: 'analystsInfo',
        auth: true,
    },
    {
        name: 'hotdetail',
        auth: true,
        role: true,
    },
    {
        name: 'subjectDetail',
        auth: true,
        role: true,
    },
    {
        name: 'allRemark',
        auth: true,
    },
    {
        name: 'reviewDetail',
        auth: true,
        role: true,
    },
    {
        name: 'featproducts',
        auth: true,
    },
    {
        name: 'featproducts-detail',
        auth: true,
        role: true,
    },
    {
        name: 'setting',
    },
    {
        name: 'agreement',
    },
    {
        name: 'version',
    },
    {
        name: 'my-profile',
        auth: true,
    },
    {
        name: 'my-browsedhis',
        auth: true,
    },
    {
        name: 'my-follows',
        auth: true,
        role: true,
    },
    {
        name: 'my-likes',
        auth: true,
        role: true,
    },
    {
        name: 'my-collections',
        auth: true,
        role: true,
    },
    {
        name: 'about',
    },
    {
        name: 'account-login',
    },
    {
        name: 'login',
    },
    {
        name: 'second-login',
    },
    {
        name: 'forgot',
    },
    {
        name: 'register',
    },
    {
        name: 'service-agreement',
    },
    {
        name: 'privilege-free-management',
        auth: true,
    },
    {
        name: 'salerInfo',
    },
    { name: 'yjfzb' },
    { name: 'yjfzb-intro' },
    { name: 'white-paper' },
    { name: 'common-pdf' },
    { name: 'register' },
    { name: 'register-waiting' },
    { name: 'markdown' },
    { name: 'common-preview' },
    //其他app首页
    { name: 'outsource' },
    { name: 'allResearchService', auth: true },
    { name: 'derivative' },
    { name: 'fixedincome', auth: true },
    { name: 'service-intro' },
    { name: 'business-instro' },
    { name: 'bond-issue-detail' },
    { name: 'bond-road-detail' },
    { name: 'option-placing', role: true },
    { name: 'cross-border-transaction-order', role: true },
    { name: 'demo1' },
    { name: 'demo2' },
    { name: 'test1', auth: true, role: true },
];

function init() {
    console.error('=================init pathMap===================');
    // console.error('VERSION', constants.VERSION);
    // console.error("VERSION", constants.DATEVERSION);
    console.error('================================================');
    let pagesMap = {};
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        pagesMap[page.name] = page;
    }
    return pagesMap;
}

export default {
    pagesMap: init(),
};
