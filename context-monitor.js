import { getContext, eventSource } from '../../../../script.js';
import { generatePhoneData } from './custom-api-config.js';
import { renderWeChat } from './app/wechat.js';

export function setupContextMonitor() {
    eventSource.on('chat_loaded', async () => {
        const context = getContext();
        const characterId = context.characterId;
        
        if (!characterId) return;

        const charData = context.characters[characterId];
        const charName = charData.name;
        const charPersona = charData.description || charData.personality;

        console.log(`[Phone Snooper] 正在解析角色: ${charName}`);
        
        showLoadingScreen();
        const phoneData = await generatePhoneData(charName, charPersona);
        
        if (phoneData) {
            renderWeChat(phoneData.wechat);
            hideLoadingScreen();
        }
    });
}

function showLoadingScreen() { $('#phone-screen-content').html('<div class="loader">正在破解手机数据...</div>'); }
function hideLoadingScreen() { /* 清除 Loader */ }
