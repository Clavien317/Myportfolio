import nodemailer from "nodemailer";

export default async function(req, res) {
    try {
        const { nom, email, objet, message } = req.body;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'Claviennambinina511@gmail.com',
                pass: 'qlgt zujv iscc ohcd'
            }
        });

        const info = await transporter.sendMail({
            from: 'Claviennambinina511@gmail.com',
            to: email,
            subject: `Bonjour ${nom}`,
            text: `J'ai reçu votre message et je vous répondrai dans les plus brefs délais`
        });

        const info2 = await transporter.sendMail({
            from: 'Claviennambinina511@gmail.com',
            to: 'claviennambinina@gmail.com',
            subject: `${objet}`,
            text: `Quelqu'un ayant l'adresse email " ${email} ", nommé : ${nom}, vient de vous envoyer le message suivant : "${message}".`
        });


        return res.status(200).json({ message: "Email envoyé avec succès !" });
    } catch (error) {
        console.error('Erreur dans l\'API d\'envoi d\'email :', error);
        return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
    }
}
