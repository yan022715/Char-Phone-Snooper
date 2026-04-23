export function initMobileUI() {
    const $phoneWrapper = $('#char-phone-wrapper');
    const $toggleBtn = $('<div id="phone-snooper-toggle" class="menu_button" title="查岗手机">📱</div>');
    
    $('#rm_button_group').append($toggleBtn);

    $toggleBtn.on('click', () => {
        $phoneWrapper.toggleClass('active');
        if ($phoneWrapper.hasClass('active')) {
            updateStatusBarTime();
        }
    });

    $('#ios-home-bar').on('click', () => {
        $phoneWrapper.removeClass('active');
    });
}

function updateStatusBarTime() {
    const now = new Date();
    $('#ios-time').text(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
}
