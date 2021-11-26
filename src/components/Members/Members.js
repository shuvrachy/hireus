import './Members.css';

const Members = (props) => {
    const {name, img, role, salary, age, country} = props.member;
    return (
        <div className="member-card">
            
                <img src={img} alt="" />
                <p>Name : {name}</p>
                <p>Role : {role}</p>
                <p>Salary : {salary}</p>
                <p>Age : {age}</p>
                <p>From : {country}</p>
                <button onClick={() => props.handleAddToCart(props.member)} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to cart</button>
                
            
            
        </div>
    );
};

export default Members;