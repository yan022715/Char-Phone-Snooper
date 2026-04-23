import { initMobileUI } from './mobile-init.js';
import { setupContextMonitor } from './context-monitor.js';
import { initDragHelper } from './drag-helper.js';

jQuery(async () => {
    console.log('[Char-Phone-Snooper] 插件开始加载...');
    
    // 1. 加载 HTML 模板并注入 DOM
    const htmlResponse = await fetch('/scripts/extensions/third-party/Char-Phone-Snooper/mobile-phone.html');
    const htmlContent = await htmlResponse.text();
    $('#extension_settings').append(htmlContent);

    // 2. 初始化核心模块
    initMobileUI();
    initDragHelper();
    setupContextMonitor();

    console.log('[Char-Phone-Snooper] 插件加载完成，等待角色选中...');
});
