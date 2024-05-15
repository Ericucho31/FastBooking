const CitaPendienteAAgendada = (citaPendiente, fecha) => {

    const citaAgendada = {
        [fecha]: citaPendiente
    };

    return citaAgendada;
};

export default CitaPendienteAAgendada;