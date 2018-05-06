import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export default i18n
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translations: {
                    'Home.SeccionPrincipal.welcome':"Welcome to Open Source Survey",
                    'Home.SeccionPrincipal.shortDescription':"Create surveys using questions, validates and healthy to the community",
                    'Home.SeccionPrincipal.btnRespondSurvey':"I want respond some surveys",
                    'Home.SeccionPrincipal.btnJoinOurApp':"Join Our Academic Community",


                    'Home.SeccionSecundaria.title':"Amazing Features",
                    'Home.SeccionSecundaria.FirstCaracteristic':"Open Exchange acknowledge",
                    'Home.SeccionSecundaria.FirstContent':"Open Source Survey be able to the users share all the content that created like surveys, questions, comments",
                    'Home.SeccionSecundaria.SecondCaracteristic':"Feedback to other users",
                    'Home.SeccionSecundaria.SecondContent':"You can create issues about the questions or surveys that other users developed",
                    'Home.SeccionSecundaria.ThirdCaracteristic':"Use healthy questions",
                    'Home.SeccionSecundaria.ThirdContent':"When create questions, you questions can have three states: review, stable, reject",
                    'Home.SeccionSecundaria.FourCaracteristic':"Do you need help of some experts?",
                    'Home.SeccionSecundaria.FourContent':"The problem when you design surveys to measure some, you need think well about the type of content that create and use right words",
                    'Home.SeccionSecundaria.FiveCaracteristic':"You can add colaborators to your surveys!",
                    'Home.SeccionSecundaria.FiveContent':"Somebody you want add to you surveys to improve the quality the content or receive feedback",
                    'Home.SeccionSecundaria.SixCaracteristic':"Win merits with the content you developed ",
                    'Home.SeccionSecundaria.SixContent':"You can win benefit in the platform, creating content that help to other users and you can validate if a question should be part of the creation of a survey",


                    'Home.Leyenda.Title':"What is the meaning Open Source Survey?",
                    'Home.Leyenda.Content':"Open source survey is a project create with the goal of help to people that" +
                    "work in the academic or doing research in different topic where is present the human interaction"+
                    "We noticed that many people spend a lot time design bad surveys, with long content of questions" +
                    "the use of words with a wrong meaning. All this problem has made very hard to get conclusions, for these reasons "+
                    "we developed Open Source Survey, a tools where the way of create surveys is a little bit different"+
                    "because all users can only use questions that were validates to the community of users, a question can have three states"+
                    "reject, stable, review. If you want all you questions be use in surveys, then need create a good content. "+
                    "Open source survey is a project open source where it meaning that all content you developed can be use others users without cost or price",


                    'Home.Caracteristica.Title':"Meritocracy",
                    'Home.Caracteristica.FirstCaracteristic':"Validate Questions",
                    'Home.Caracteristica.FirstContent':"A committe member can validate the question's state and decide if the question should be accept or reject ",
                    'Home.Caracteristica.SecondCaracteristic':"Validate Issues Questions",
                    'Home.Caracteristica.SecondContent':"When a question is in a stable state (valid), and someone else create an issues, a committee member can decide if this issues should be accepted or reject",
                    'Home.Caracteristica.ThirdCaracteristic':"Assign to others committee member a set of questions",
                    'Home.Caracteristica.ThirdContent':"A committee member can take a set questions and assign these questions to other committee members.",


                    'Home.Merito.Title':"Just Write the email the survey's creator, That is It!",
                    'Home.Merito.Content':"If you are a student or people that need respond a survey, just click on the button below and access the content that you want respond!",


                    'Home.Desarrolladores.Title':"The Developer Team",
                    'Home.Desarrolladores.shortDescription':"Meet our team of developers",
                    'Home.Desarrolladores.FirstUser':"Developer the backend and frontEnd side of the app.",
                    'Home.Desarrolladores.FirstUserDegree':"Ing Computer Science",
                    'Home.Desarrolladores.SecondUser':"Project Manager Open Source Survey",
                    'Home.Desarrolladores.SecondUserDegree':"Msc. Information Security",


                    'Home.RedesSociales.Title':"Log in just using social media",
                    'Home.RedesSociales.shortDescription':"Uhh!, you are developer or computer science, also we have access by github",
                    'Home.RedesSociales.description':"Remember, log in with the same social media that you used to first time!"
                }
            },
            es: {
                translations: {
                        'Home.SeccionPrincipal.welcome':"Bienvenido a Open Source Survey",
                        'Home.SeccionPrincipal.shortDescription':"Crea Encuesta usando preguntas validadas y saniadas por la comunidad",
                        'Home.SeccionPrincipal.btnRespondSurvey':"Yo quiero responder algunas encuestas",
                        'Home.SeccionPrincipal.btnJoinOurApp':"Unete a nuestra comunidad",
                        'Home.SeccionSecundaria.title':"Grandiosas Caracteristicas",

                        'Home.SeccionSecundaria.FirstCaracteristic':"Intercambio de conocimiento Abierto",
                        'Home.SeccionSecundaria.FirstContent':"Open Source Survey permite a todos los usuarios compartir su contenido que han desarrollado como encuestas, preguntas, comentarios",
                        'Home.SeccionSecundaria.SecondCaracteristic':"Recibe retroalimentacion de otros usuarios ",
                        'Home.SeccionSecundaria.SecondContent':"Tu puedes crear correcciones de preguntas validas o de encuestas que otros usuarios han desarrollado",
                        'Home.SeccionSecundaria.ThirdCaracteristic':"Preguntas validadas por la comunidad",
                        'Home.SeccionSecundaria.ThirdContent':"Cuando creas preguntas, estas pueden pasar por tres estados, revision, estable, rechazado",
                        'Home.SeccionSecundaria.FourCaracteristic':"Necesitas ayuda de algunos expertos?",
                        'Home.SeccionSecundaria.FourContent':"Cuando realizas un proyecto de investigacion que requiere la retroalimentacion de un grupo de usuarios, es importante"+
                        "considerar el uso del vocabulario correcto a utilizar, la cantidad de preguntas de una encuestas, la calidad de las palabras que se usan",
                        'Home.SeccionSecundaria.FiveCaracteristic':"Añade colaboradores a tus encuestas",
                        'Home.SeccionSecundaria.FiveContent':"Puedes añadir colaboradores a tus encuestas para que puedan editar o comentar el contenido creado y asi puedas" +
                        "obtener mejores resultados",
                        'Home.SeccionSecundaria.SixCaracteristic':"Gana méritos dependiendo del contenido que desarrollas",
                        'Home.SeccionSecundaria.SixContent':"Puedes subir de nivel, mientras mas preguntas validadas obtengas y contribuyas con la generacion de contenido para beneficio de los demas usuarios",


                        'Home.Leyenda.Title':"Que significa Open Source Survey?",
                        'Home.Leyenda.Content':"Open Source Survey es un proyecto"+ 
                        "creado con el objetivo de ayudar a las personas que trabajan"+
                        "en el ámbito académico o haciendo investigación en diferentes"+
                        "temas donde está presente la interacción humana."+
                        " Notamos que muchas personas pasan mucho tiempo diseñando encuestas muy largas,"+
                        " el uso de palabras con un significado incorrecto, al publico donde va dirigido las encuestas no es el adecuado"+
                        "Todo este problema ha hecho muy difícil sacar conclusiones, por estas razones desarrollamos Open Source Survey, una herramienta donde la forma de crear encuestas es un poco diferente de lo habitual, debido que todos los usuarios solo pueden usar preguntas que fueron validadas para la comunidad de usuarios, una pregunta puede tener tres estados"
                        +"rechazado, estable y  revisión. Si quieres que todas tus preguntas se utilicen en encuestas, entonces necesitas crear un buen contenido. "+
                        "Open source survey es un proyecto de código abierto, lo que significa que todo el contenido que desarrollas puede ser utilizado por otros usuarios sin ningun costo.",


                        'Home.Caracteristica.Title':"Meritocracia",
                        'Home.Caracteristica.FirstCaracteristic':"Validar Preguntas",
                        'Home.Caracteristica.FirstContent':"Un miembro del comite puede validar el estado de una pregunta y decidir si debe ser aceptada o rechazada",
                        'Home.Caracteristica.SecondCaracteristic':"Validar correcciones hechas a preguntas",
                        'Home.Caracteristica.SecondContent':"Cuando una pregunta, se encuentra en un estado estable y alguien desarrollo una corrección a esa pregunta, un miembro del comite puede decidir si la correccion debe ser aceptada o rechazada",
                        'Home.Caracteristica.ThirdCaracteristic':"Asignar a otros miembros del comite que validen preguntes",
                        'Home.Caracteristica.ThirdContent':"Un miembro del comite, puede tomar un conjunto de preguntas y asignarles a otros usuarios que tienen el mismo rol que el usuario asignador.",


                        'Home.Merito.Title':"No te compliques, solo escribe el correo electronico del creador de la encuesta y puedes acceder a su contenido",
                        'Home.Merito.Content':"Si eres un estudiante o una persona que desea responder una encuesta que un usuario a elaborado, solo da click al boton de abajo y accede al contenido de manera gratuita",


                        'Home.Desarrolladores.Title':"Equipo de Desarrolladores",
                        'Home.Desarrolladores.shortDescription':"Conoce al equipo que desarrolla este proyecto",
                        'Home.Desarrolladores.FirstUser':"Desarrollador de la parte del backend y front-End de la aplicación",
                        'Home.Desarrolladores.FirstUserDegree':"Ing Computer Science",
                        'Home.Desarrolladores.SecondUser':"Director del proyecto Open Source Survey",
                        'Home.Desarrolladores.SecondUserDegree':"Msc. Information Security",
                        

                        'Home.RedesSociales.Title':"Ingresa a nuestra plataforma usando solo redes sociales",
                        'Home.RedesSociales.shortDescription':"Uhh, tu eres desarrollador or tienes un titulo de computer science, nosotros te damos acceso a nuestra plataforma por github",
                        'Home.RedesSociales.description':"Recuerda registrarte usando el mismo medio social, que usaste cuando ingresaste por primera vez a la plataforma"
                }
            }
        },
        fallbackLng: "en",
        "lng": "en",
        debug: true,
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        react: {
            wait: true
        }
    });

