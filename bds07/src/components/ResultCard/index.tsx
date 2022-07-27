import './styles.css';

type Props = {
  title: string;
  description: string;
  
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <>
      <div className="result-container">
        <div className="card-container">
         
          <div className="info-container">
            <h3 className="result-title">{title}</h3>
            <p className="result-description">{description}</p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
