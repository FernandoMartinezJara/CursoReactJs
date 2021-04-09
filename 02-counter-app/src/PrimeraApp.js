import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {

    const devs = {
        nombre: 'Fernando',
        edad: 66
    }

   return <>
        <h1>{ saludo }</h1>
        {/* <pre>{JSON.stringify(devs, null, 3)}</pre> */}
        <p>{ subtitulo }</p>
    </>;
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: 'Esta es mi primera app'
}

export default PrimeraApp;