import '../App.css';
import Earth from './Earth';

export const SiteDescription: React.FC = () => {
    return (<>
        <Earth />
        <div className="description" >
            <h1> На этом сайте вы сможете узнать главную информацию о всех странах мира, а так же сравнить их на вкладке Comparsion</h1>

        </div>
    </>
    )
}
