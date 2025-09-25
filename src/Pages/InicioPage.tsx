import "./PageLayout.css"

const InicioPage = () => {
    return(
        <>
            <h2>Adcione sua tarefa logo abaixo</h2>
            <form>
                <div>
                    <label>
                    Nome da Tarefa:
                    <input type="text" name="text" />
                    </label>
                </div>
                <div>
                    <label>
                    Descrição:
                    <input type="text" name="text" />
                    </label>
                </div>
                <div>
                    <button type="reset">Adicionar</button>
                </div>
            </form>
        </>
    )
}

export default InicioPage;