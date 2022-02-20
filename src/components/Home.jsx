import Main from './Main';
import About from './About';
import Services from './Services';
import Work from './Work';
import Solution from './Solution';
import Qoute from './Qoute';
import Contact from './Contact';

function Home(){
    return (
        <>
            <Main/>
            <About/>
            <Services/>
            <Work/>
            <Qoute/>
            <Solution/>
            {/* <Companies/> */}
            <Contact/>
        </>

    )
}

export default Home;