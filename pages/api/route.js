import nodemailer from "nodemailer";

export default async function(req, res) {
    try {
        const { nom, email, objet, message } = req.body;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'Claviennambinina511@gmail.com',
                pass: 'qlgt  iscc ohcd'
            }
        });

        const info = await transporter.sendMail({
            from: 'Claviennambinina511@gmail.com',
            to: email,
            subject: `Bonjour ${nom}, vous souhaitez parler de ${objet}`,
            text: `J'ai bien reçu votre email contenant le message "${message}" et je vous répondrai dans les plus brefs délais.`
        });


        return res.status(200).json({ message: "Email envoyé avec succès !" });
    } catch (error) {
        console.error('Erreur dans l\'API d\'envoi d\'email :', error);
        return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
    }
}
