import classes from './MiniManuscript.module.css';

interface MiniManuscriptProps {
  pages: number[];
  currentPage: number;
  onPageChange: (page: number) => void; // onPageChange는 숫자를 파라미터로 받고 반환하지 않는 함수
}

const MiniManuscript = ({ pages, currentPage, onPageChange }: MiniManuscriptProps) => {

  return (
    <div className={classes.manuscriptLargeBox}>
      {/* 상 */}
      <div className={classes.manuscriptLine}></div>
      {/* 중 */}
      <div className={classes.manuscriptMiddleBox}>
        <div className={classes.manuscriptSmallBetweenBoxLeft}></div>
        {pages.map((page: number) => (
          <div
            key={page}
            onClick={() => onPageChange(page)}
            className={classes.manuscriptSmallBox}
          >
            <p className={`${classes.manuscriptText} ${page === currentPage ? classes.currentManuscriptText : ''}`}>
              {page}</p>
          </div>
        ))}
        <div className={classes.manuscriptSmallBetweenBoxRight}></div>
      </div>
      {/* 하 */}
      <div className={classes.manuscriptLine}></div>
    </div>
  );
};
export default MiniManuscript;
