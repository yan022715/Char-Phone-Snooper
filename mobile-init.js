// mobile-init.js
import { makeDraggable } from './drag-helper.js';

export function initCharPhone() {
    if (document.getElementById('cps-phone-ui')) return;

    const phoneHTML = `
        <div id="cps-floating-btn" class="cps-floating-icon">📱</div>
        <div id="cps-phone-ui" class="cps-phone-container">
            <div class="cps-phone-screen">
                <div id="cps-phone-notch" class="cps-notch"></div>
                
                <div class="ios-app app-wechat" id="cps-app-wechat">
                    <div class="ios-header">微信</div>
                    <div class="ios-content" id="wechat-messages-container">
                        <div class="ios-list">
                            <div class="ios-list-item">
                                <div class="wechat-avatar" style="background: #ddd;"></div>
                                <div class="wechat-text">
                                    <h4 id="display-char-name">系统消息</h4>
                                    <p id="display-last-msg">正在等待角色数据...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ios-app app-bank" id="cps-app-bank" style="display: none;">
                    <div class="ios-header">手机银行</div>
                    <div class="ios-content">
                        <div class="bank-card">
                            <div class="label">账户总余额 (CNY)</div>
                            <div class="balance" id="bank-balance-value">¥ 0.00</div>
                            <div class="label">**** **** **** 8888</div>
                        </div>
                    </div>
                </div>

                <div id="cps-home-btn" class="cps-home-indicator"></div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', phoneHTML);

    const floatingBtn = document.getElementById('cps-floating-btn');
    const phoneUI = document.getElementById('cps-phone-ui');
    const phoneNotch = document.getElementById('cps-phone-notch');
    const homeBtn = document.getElementById('cps-home-btn');

    makeDraggable(floatingBtn);
    makeDraggable(phoneUI, phoneNotch);

    let isDragging = false;
    floatingBtn.onmousedown = () => isDragging = false;
    floatingBtn.onmousemove = () => isDragging = true;
    floatingBtn.onmouseup = () => {
        if (!isDragging) {
            phoneUI.style.display = 'block';
            floatingBtn.style.display = 'none';
        }
    };

    homeBtn.onclick = () => {
        phoneUI.style.display = 'none';
        floatingBtn.style.display = 'flex';
    };

    console.log("Char-Phone-Snooper: 界面嫁接完成，等待数据注入。");
}
