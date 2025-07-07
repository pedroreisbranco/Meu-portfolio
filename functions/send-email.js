import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: "us-east-1",  // ou a região onde você configurou o SES
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

export async function onRequest(context) {
  const body = await context.request.json();
  
  const params = {
    Source: process.env.FROM_EMAIL,
    Destination: { ToAddresses: [process.env.EMAIL] },
    Message: {
      Subject: { Data: "Nova mensagem do site" },
      Body: {
        Text: { Data: body.message || "Mensagem sem conteúdo" }
      }
    }
  };

  try {
    const command = new SendEmailCommand(params);
    await ses.send(command);
    return new Response("Email enviado com sucesso", { status: 200 });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return new Response("Erro ao enviar e-mail", { status: 500 });
  }
}
