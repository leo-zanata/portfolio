(function () {
    emailjs.init("aoJRNY2V7qfjj5I3_"); // User ID
  })();
  
  // Função para enviar e-mail
  function enviarEmail(formulario) {
    const serviceID = "service_93kditf"; // Service ID
    const templateID = "template_bu02as5"; // Template ID
  
    return emailjs.sendForm(serviceID, templateID, formulario)
      .then(() => {
        return "Mensagem enviada com sucesso!";
      })
      .catch((err) => {
        throw new Error("Erro ao enviar mensagem: " + JSON.stringify(err));
      });
  }
  