import nodemailer from "nodemailer";

export default async function(req, res) {
    try {
        const { nom, email, objet } = req.body;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'Claviennambinina511@gmail.com',
                pass: 'qlgt zujv iscc ohcd'
            }
        });

        const info = await transporter.sendMail({
            from: 'Claviennambinina511@gmail.com', // Adresse de l'expéditeur
            to: email, // Adresse du destinataire
            subject: `Bonjour ${nom}`, // Sujet du message
            text: `J'ai reçu votre email et je vous répondrai dans les plus brefs délais ${objet}` // Corps du message en texte brut
        });

        return res.status(200).json({ message: "Email envoyé avec succès !" });
    } catch (error) {
        console.error('Erreur dans l\'API d\'envoi d\'email :', error);
        return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
    }
}
