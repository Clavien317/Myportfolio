import { json, send } from 'micro';
import nodemailer from 'nodemailer';

export default async function(req, res) {
  try {
    const body = await json(req);
    const { email, nom, objet } = body; // Ajout de `test` ici

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'claviennambinina511@gmail.com',
        pass: 'jcua kqwt nnbj uoay', // Assurez-vous de remplacer par votre mot de passe
      },
    });

    await transporter.sendMail({
      from: 'claviennambinina511@gmail.com',
      to: `${email}`,
      subject: `Bonjour ${nom}`,
      text: `J'ai reçu votre email et je vous répondrai dans les plus brefs délais. Contenu du test : ${objet}`,
    });

    return send(res, 200, 'Successful');
  } catch (error) {
    console.error('Error in email sending API:', error);
    return send(res, 500, 'Internal Server Error');
  }
}
