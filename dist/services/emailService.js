"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail({ to, message }) {
        console.log(`E-mail enviado para ${to.name}: ${message.subject}`);
    }
}
exports.default = EmailService;
