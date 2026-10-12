using System.Net;
using System.Net.Mail;

namespace ATMMonitoringWebApp.Services
{
    public class EmailService
    {
        private readonly IConfiguration _config;

        public EmailService(IConfiguration config)
        {
            _config = config;
        }

        public async Task SendOtpAsync(string toEmail, string otp)
        {
            var smtpHost = _config["EmailSettings:SmtpHost"];
            var smtpPort = int.Parse(_config["EmailSettings:SmtpPort"]!);
            var senderEmail = _config["EmailSettings:SenderEmail"];
            var senderPassword = _config["EmailSettings:SenderPassword"];

            using var client = new SmtpClient(smtpHost, smtpPort)
            {
                EnableSsl = true,
                Credentials = new NetworkCredential(senderEmail, senderPassword)
            };

            var mail = new MailMessage
            {
                From = new MailAddress(senderEmail!, "ATM Monitoring Web App"),
                Subject = "Your OTP for ATM Monitoring Login",
                Body = $"Your OTP is: {otp}\n\nThis OTP is valid for 5 minutes.",
                IsBodyHtml = false
            };

            mail.To.Add(toEmail);

            await client.SendMailAsync(mail);
        }
    }
}