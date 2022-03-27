import * as functions from "firebase-functions";
import * as admin from "firebase-admin";


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


admin.initializeApp();
const firestore = admin.firestore();


//Envia notificacion al coductor cuando es elegido para el viaje
// exports.Alertas= functions.firestore
// .document('/Notificaciones/{Id}')
// .onCreate(async (event)=>{
//     const solicitud = event.data()    
//     console.log(solicitud)
//     const Titulo = solicitud.Titulo
//     const Contenido = solicitud.Contenido
//     const token = 'cv8gRx4wQ7GjaLEQ79eYOP:APA91bHiAWvxIwIpWQch3tR5larjtDd5RGz8aFOWI-CmYLFQ0814V-p7MxJ1rDYGtBWHr8nvquxFYoNdxeloyd2oYl8_sB8j08vmPHR-lKdcjQBXWWFZLoPXgZr2injvU_TxbuQ-aZgp'
//     const dataFcm={
//         enlace: '/servicio',
//     }

    
//     //primera = saludo.split(' ')[0]
//     //let saludo2      = solicitud.NombreConductor,
//     //segunda = saludo2.split(' ')[0]
   
//     const Notificacion : Notificacion ={
//         data: dataFcm,
//         token: [token],
//         notification:{
//             title: Titulo,
//             body: Contenido        }
//     }
//     return sendNotification(Notificacion)
// });





//NotificacionMasiva

exports.EnvioNotificacionesMasivas= functions.firestore
.document('/Notificaciones/{id}')
.onCreate(async (event) => {
    const notificacion = event.data();
    const Mensaje = notificacion.Mensaje;
    const Titulo= 'Drivers ';
    
    
   
   firestore.collection('/TokenUsuarios').get().then(res=>{
    res.forEach(element => {
             element.data();
             const solicitud =  element.data();

           const token= solicitud.Token
        //const token= 'ek8uqoX7TfuDQjXOUf7p4Y:APA91bFu-WikSlauLy3Y_jZxIW95AyYuBa54EM1F-bC_j0pKW0t5vMNXdlo-vH_zh0oyP83c7fUDJiaAn6BKlOrGVyd5uz1b_O64lxEcxXDFFmRT_Grp7J4BAOoSCUiJB2_nlsx72cZG'
                   
            const Acvt= solicitud.Estado;
                if(Acvt=='1')
                {
                    console.log(token)
                const dataFcm={
                    enlace: 'https://t.me/joinchat/qoBUuKxDqMw2Y2Nh',
                }
        
                const Notificacion : Notificacion ={
                    data: dataFcm,
                    token: [token],
                    notification:{
                        title: Titulo,
                        body: Mensaje,
                        
                        
                    }
                }
                return sendNotification(Notificacion)
                }
              
                return null;   
            
    });

 })
    
 return null;   


});





//AutomaticaDemo
exports.MensajeAuotmatico = functions.pubsub.schedule('5 6 * * *')
  .timeZone('America/New_York') // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {
 
  
    firestore.collection('/TokenUsuarios').get().then(res=>{
        res.forEach(element => {
                 element.data();
                 const solicitud =  element.data();
    
                 const token= 'ek8uqoX7TfuDQjXOUf7p4Y:APA91bFu-WikSlauLy3Y_jZxIW95AyYuBa54EM1F-bC_j0pKW0t5vMNXdlo-vH_zh0oyP83c7fUDJiaAn6BKlOrGVyd5uz1b_O64lxEcxXDFFmRT_Grp7J4BAOoSCUiJB2_nlsx72cZG'
                   const Acvt= solicitud.Estado;
                    if(Acvt=='1')
                    {
                        console.log(token)
                    const dataFcm={
                        enlace: '/home',
                        tipo: '1'
                    }
            
                    const Notificacion : Notificacion ={
                        data: dataFcm,
                        token: [token],
                        notification:{
                            title: 'Probando',
                            body: 'Notificacion automatica',
                        }
                    }
                    return sendNotification(Notificacion)
                    }
                  
                    return null;   
                
        });
    
     })
        
     return null;   
    

});

//AutomaticaDemo
exports.MensajeAuotmatico2 = functions.pubsub.schedule('5 12 * * *')
  .timeZone('America/New_York') // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {
 
  
    firestore.collection('/TokenUsuarios').get().then(res=>{
        res.forEach(element => {
                 element.data();
                 const solicitud =  element.data();
    
                 const token= 'ek8uqoX7TfuDQjXOUf7p4Y:APA91bFu-WikSlauLy3Y_jZxIW95AyYuBa54EM1F-bC_j0pKW0t5vMNXdlo-vH_zh0oyP83c7fUDJiaAn6BKlOrGVyd5uz1b_O64lxEcxXDFFmRT_Grp7J4BAOoSCUiJB2_nlsx72cZG'
                   const Acvt= solicitud.Estado;
                    if(Acvt=='1')
                    {
                        console.log(token)
                    const dataFcm={
                        enlace: '/home',
                    }
            
                    const Notificacion : Notificacion ={
                        data: dataFcm,
                        token: [token],
                        notification:{
                            title: 'Probando',
                            body: 'Notificacion automatica 12',
                        }
                    }
                    return sendNotification(Notificacion)
                    }
                  
                    return null;   
                
        });
    
     })
        
     return null;   
    

});

//AutomaticaDemo
exports.MensajeAuotmatico1 = functions.pubsub.schedule('5 14 * * *')
  .timeZone('America/New_York') // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {
 
  
    firestore.collection('/TokenUsuarios').get().then(res=>{
        res.forEach(element => {
                 element.data();
                 const solicitud =  element.data();
    
                 const token= 'ek8uqoX7TfuDQjXOUf7p4Y:APA91bFu-WikSlauLy3Y_jZxIW95AyYuBa54EM1F-bC_j0pKW0t5vMNXdlo-vH_zh0oyP83c7fUDJiaAn6BKlOrGVyd5uz1b_O64lxEcxXDFFmRT_Grp7J4BAOoSCUiJB2_nlsx72cZG'
                   const Acvt= solicitud.Estado;
                    if(Acvt=='1')
                    {
                        console.log(token)
                    
                     const dataFcm={
                        enlace: '/home',
                    }
            
                    const Notificacion : Notificacion ={
                        data: dataFcm,
                        token: [token],
                        notification:{
                            title: 'Probando',
                            body: 'Notificacion automatica 14',
                        }
                    }
                    return sendNotification(Notificacion)
                    }
                  
                    return null;   
                
        });
    
     })
        
     return null;   
    

});

//AutomaticaDemo
exports.MensajeAuotmatico4 = functions.pubsub.schedule('5 16 * * *')
  .timeZone('America/New_York') // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {
 
  
    firestore.collection('/TokenUsuarios').get().then(res=>{
        res.forEach(element => {
                 element.data();
                 const solicitud =  element.data();
    
                 const token= 'ek8uqoX7TfuDQjXOUf7p4Y:APA91bFu-WikSlauLy3Y_jZxIW95AyYuBa54EM1F-bC_j0pKW0t5vMNXdlo-vH_zh0oyP83c7fUDJiaAn6BKlOrGVyd5uz1b_O64lxEcxXDFFmRT_Grp7J4BAOoSCUiJB2_nlsx72cZG'
                   const Acvt= solicitud.Estado;
                    if(Acvt=='1')
                    {
                        console.log(token)
                    const dataFcm={
                        enlace: '/home',
                      
                    }
            
                    const Notificacion : Notificacion ={
                        data: dataFcm,
                        token: [token],
                        notification:{
                            title: 'Probando',
                            body: 'Notificacion automatica 16',
            
                        }
                    }
                    return sendNotification(Notificacion)
                    }
                  
                    return null;   
                
        });
    
     })
        
     return null;   
    

});

//Envio de notificacion
const sendNotification = (Notificacion: Notificacion)=>{
    return new Promise((resolve) => {
        const message: admin.messaging.MulticastMessage={
            data: Notificacion.data,
            tokens: Notificacion.token,
            notification: Notificacion.notification,
            android: {
                notification:{
                    icon: 'ic_stat_name',
                    color: '#0066cc',
                    vibrateTimingsMillis: [1000, 1000], 
                    visibility: "public",
                    priority: "max",                   }
            }
        }

        admin.messaging().sendMulticast(message).then((response)=>{
            resolve(true);
            console.log("Enviada")
            return;
        }).catch(error=>{
            resolve(false);
             console.log("Enviada" + error)
            return;
        })
        })
}

interface Notificacion{
    data: any;
    token: string[];
    notification: admin.messaging.Notification;
}