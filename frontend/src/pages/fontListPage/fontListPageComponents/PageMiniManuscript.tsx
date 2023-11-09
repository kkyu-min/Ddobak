import classes from '../../mainPage/MainPage.module.css';

const PageMiniManuscript: React.FC = () => {

  return (
    // 컴포넌트를 클릭하면 새 탭에서 링크가 열리도록 합니다.
    <div
      className={classes.manuscriptLargeBox}
    >
      {/* 상 */}
      <div className={classes.manuscriptLine}></div>
      {/* 중 */}
      <div className={classes.manuscriptMiddleBox}>
        <div className={classes.manuscriptSmallBetweenBoxLeft}></div>
        <div className={classes.manuscriptSmallBox}>
          <p className={classes.manuscriptText}>1</p>
        </div>
        <div className={classes.manuscriptSmallBox}>
          <p className={classes.manuscriptText}>2</p>
        </div>
        <div className={classes.manuscriptSmallBox}>
          <p className={classes.manuscriptText}>3</p>
        </div> 
        <div className={classes.manuscriptSmallBox}>
          <p className={classes.manuscriptText}>4</p>
        </div>
        <div className={classes.manuscriptSmallBox}>
          <p className={classes.manuscriptText}>5</p>
        </div>
        <div className={classes.manuscriptSmallBetweenBoxRight}></div>
      </div>
      {/* 하 */}
      <div className={classes.manuscriptLine}></div>
    </div>
  );
};
export default PageMiniManuscript;
