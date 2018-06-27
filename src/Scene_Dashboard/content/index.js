import Loadable from 'react-loadable';
import MDSpinner from "react-md-spinner";


export const dynamicDashBandejaEntrada=Loadable({
    loader: () => import('./BandejaEntrada/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    }
}); 

export const dynamicDashColaboradores = Loadable({
    loader: () => import('./Colaboradores/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    }

});

export const dynamicDashConfiguracionCuenta = Loadable({
    loader: () => import('./ConfiguracionCuenta/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    }
});

export const dynamicContentDashboard = Loadable({
    loader: () => import('./DashBoard/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    } 
});

export const dynamicDashEncuesta = Loadable({
    loader: () => import('./Encuesta/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    }
});

export const dynamicDashNuevaEncuesta = Loadable({
    loader: () => import('./nuevaEncuesta/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    }
});

export const dynamicDashNuevaPregunta = Loadable({
    loader: () => import('./nuevaPregunta/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    }
});

export const dynamicDashPerfil = Loadable({
    loader: () => import('./Perfil/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    }
});

export const dynamicDashPortalEncuestas = Loadable({
    loader: () => import('./portalEncuestas/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    }
});

export const dynamicDashPortalPreguntas = Loadable({
    loader: () => import('./portalPreguntas/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    }
});

export const dynamicDashPregunta = Loadable({
    loader: () => import('./Pregunta/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    }
});

export const dynamicDashResultadosEncuestas = Loadable({
    loader: () => import('./resultadosEncuesta/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    }
});

export const dynamicMiDashboard = Loadable({
    loader: () => import('./miDashboard/index'),
    loading(){
        return <MDSpinner  color1="#e91e63"
                           color2="#673ab7"
                           color3="#009688"
                           color4="#ff5722" size={100} />;
    }
});