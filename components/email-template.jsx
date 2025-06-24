// import * as React from 'react';

// interface EmailTemplateProps {
//   firstName: string;
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   firstName,
// }) => (
//   <div>
//     <h1>Welcome, {firstName}!</h1>
//   </div>
// );


import * as React from 'react';

export const EmailTemplate = ({ firstName, email, message }) => (
  <div>
    <h2>New Inquiry from {firstName}</h2>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);
