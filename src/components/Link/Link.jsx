import PropTypes from 'prop-types';


const Link = ({route}) => {
    return (
        <div className='hover:bg-slate-300'>
             <li className='md:mx-10 py-1' ><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;