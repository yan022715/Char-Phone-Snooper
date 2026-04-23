export function renderWeChat(wechatData) {
    const $container = $('#phone-screen-content');
    $container.empty();

    let html = `<div class="wechat-app"><div class="wechat-header">微信</div><ul class="chat-list">`;
    
    if (wechatData && wechatData.recent_chats) {
        wechatData.recent_chats.forEach(chat => {
            html += `
                <li class="chat-item">
                    <div class="avatar"></div>
                    <div class="chat-info">
                        <span class="name">${chat.name}</span>
                        <span class="msg">${chat.last_msg}</span>
                    </div>
                    <div class="time">${chat.time}</div>
                </li>
            `;
        });
    }
    
    html += `</ul></div>`;
    $container.append(html);
}
