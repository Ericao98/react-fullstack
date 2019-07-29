// 确定跳转位置

export function getRouter({type, avatar}) {
    // type=boss: /boss;  type=genius: /genius
    // avatar=null: /bossinfo; /geniusinfo
    let router = '/' + type;
    if (!avatar) {
        router += 'info';
    }
    return router;
}
