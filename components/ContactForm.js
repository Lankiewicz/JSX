/* Stwórzmy teraz komponent ContactForm. Na razie będzie to tylko komponent, który będzie wyświetlał widok formularza bez powiązanej logiki,*/
var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
		  /* Właściwości Inputów zachowują podobieństwo 1 do 1 z atrybutami elementu <input> (type, placeholder i value są atrybutami tego elementu).*/
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
		  /*Pamiętaj, że każdy ReactElement jest instancją pewnej klasy, a do każdego z nich przekazywane są obiekty za pomocą właściwości (ang. props). Stąd też, aby odwołać się do właściwości konkretnej instancji, należy skorzystać z this.props.*/
        }),
        React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
      )
    )
  },
})