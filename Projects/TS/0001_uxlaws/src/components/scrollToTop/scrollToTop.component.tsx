import { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps extends RouteComponentProps {}

const ScrollToTop: React.FC<IProps> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
    return () => {
      unlisten();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default withRouter(ScrollToTop);
