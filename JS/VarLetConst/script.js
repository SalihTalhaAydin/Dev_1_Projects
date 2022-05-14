const statuses = [ 
    { code: 'OK', response: 'Request successful' },
    { code: 'FAILED', response: 'There was an error with your request' },
    { code: 'PENDING', response: 'Your reqeust is still pending' }
 ];

 let message = '';
 const currentCode = 'OK';

 for (let i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
       message = statuses[i].response;
       console.log(message);
    }
 }