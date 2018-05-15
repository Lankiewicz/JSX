var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},
	render: function() {
		return ( 
			<div className={'contactItem'}>
<<<<<<< HEAD
				<img className={'contactImage'} src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}/> 
				<p className={'contactLabel'}> 
=======
				<img className={'contactImage'} src = {'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}/> 
				<p className = {'contactLabel'} >
>>>>>>> 37ce15cada3d81ce1a150581e152c64b8f396c16
					Imię: {this.props.item.firstName},
					Nazwisko: {this.props.item.lastName}
				 </p> 
				<a href = {'mailto:' + this.props.item.email}>
<<<<<<< HEAD
				 	{this.props.item.email}
=======
				 	{this.props.item.email} 
>>>>>>> 37ce15cada3d81ce1a150581e152c64b8f396c16
				</a> 
			</div>
		);
	}
});