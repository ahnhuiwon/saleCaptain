import Swal from 'sweetalert2';

/**
 * SweetAlert Class
 *
 * @param icon 아이콘
 * @param title 제목
 * @param text 내용
 */

export class Sweetalert_class {
    constructor(icon, title, text) {
        this.icon = icon;
        this.title = title;
        this.text = text;
    }

    // Api 실패시 지정된 alert
    designated_alert(){
        const alert_variable = Swal.fire({
            icon: `error`,
            title: `네트워크 오류!`,
            html: `관리자에게 문의해주세요.`
        });

        return alert_variable;
    }
}