import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import {useMemo, useCallback} from 'react'

const ParticlesComponent = () => {
    
    const options = useMemo(() => {
        return {};
        
    }, [])
    
    
    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
      }, []);


    return <Particles init={particlesInit} options={options} />;

};

export default ParticlesComponent;