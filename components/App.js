/*Następnym krokiem do ukończenia naszej aplikacji będzie stworzenie odpowiednich danych, które przekazujemy do środka komponentów. Będą to: lista z kontaktami contacts i obiekt z kontaktem (contactForm), który jest połączony z formularzem: ContactForm.js*/
var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
  render: function() {
    return (
	<div className={'app'}>
	// Jak powyższe zamienić na JSX ?
        React.createElement(ContactForm, {contact: contactForm}),//Do komponentu ContactForm przekazujemy odpowiednie obiekty przez ich propsy {contact:...}
        React.createElement(Contacts, {items: contacts}, {}) //
      )
    );
  }
});