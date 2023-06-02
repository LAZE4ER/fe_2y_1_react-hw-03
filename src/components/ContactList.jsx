const ContactList = ({contacts}) => {
  return (
    <ul>
       {contacts.map((contact) => (
        
      <li  key = {contact.id}>
        <h1>
          {contact.name}:{contact.number}
        </h1>
      </li>
       ))}

       
    </ul>
  );
};
export default ContactList;
