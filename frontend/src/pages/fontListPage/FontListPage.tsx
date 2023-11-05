import React, { useState } from 'react';
import classes from './FontListPage.module.css';
import { FaSistrix, FaAngleDown } from 'react-icons/fa';
import { PageTitle } from 'common/titleComponents/TitleComponents';
import FontBoxComponent from './fontListPageComponents/FontBoxComponent';
import MiniManuscript from './fontListPageComponents/MiniManuscript';

const ITEMS_PER_PAGE = 12; // 한 페이지에 표시할 폰트 수

const FontListPage: React.FC = () => {
  window.scrollTo({left:0, top:0})
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [searchTerm, setSearchTerm] = useState('');

  const fonts = [
    {
      id: '1',
      title: '또박또박_테스트체_1',
      maker: '김싸피_1',
      content: '다람쥐 헌 쳇바퀴에 타고파_1',
    },
    {
      id: '2',
      title: '또박또박_테스트체_2',
      maker: '이싸피_2',
      content: '다람쥐 헌 쳇바퀴에 타고파_2',
    },
    {
      id: '3',
      title: '또박또박_테스트체_3',
      maker: '박싸피_3',
      content: '다람쥐 헌 쳇바퀴에 타고파_3',
    },
    {
      id: '4',
      title: '또박또박_테스트체_4',
      maker: '최싸피_4',
      content: '다람쥐 헌 쳇바퀴에 타고파_4',
    },
    {
      id: '5',
      title: '또박또박_테스트체_5',
      maker: '정싸피_5',
      content: '다람쥐 헌 쳇바퀴에 타고파_5',
    },
    {
      id: '6',
      title: '또박또박_테스트체_6',
      maker: '양싸피_6',
      content: '다람쥐 헌 쳇바퀴에 타고파_6',
    },
    {
      id: '7',
      title: '또박또박_테스트체_7',
      maker: '위싸피_7',
      content: '다람쥐 헌 쳇바퀴에 타고파_7',
    },
    {
      id: '8',
      title: '또박또박_테스트체_8',
      maker: '안싸피_8',
      content: '다람쥐 헌 쳇바퀴에 타고파_8',
    },      
    {
      id: '9',
      title: '또박또박_테스트체_9',
      maker: '정싸피_9',
      content: '다람쥐 헌 쳇바퀴에 타고파_9',
    },
    {
      id: '10',
      title: '또박또박_테스트체_10',
      maker: '양싸피_10',
      content: '다람쥐 헌 쳇바퀴에 타고파_10',
    },
    {
      id: '11',
      title: '또박또박_테스트체_11',
      maker: '위싸피_11',
      content: '다람쥐 헌 쳇바퀴에 타고파_11',
    },
    {
      id: '12',
      title: '또박또박_테스트체_12',
      maker: '안싸피_12',
      content: '다람쥐 헌 쳇바퀴에 타고파_12',
    },{
      id: '13',
      title: '또박또박_테스트체_13',
      maker: '양싸피_13',
      content: '다람쥐 헌 쳇바퀴에 타고파_13',
    },
    {
      id: '14',
      title: '또박또박_테스트체_14',
      maker: '위싸피_14',
      content: '다람쥐 헌 쳇바퀴에 타고파_14',
    },
    {
      id: '15',
      title: '또박또박_테스트체_15',
      maker: '안싸피_15',
      content: '다람쥐 헌 쳇바퀴에 타고파_15',
    },
    {
      id: '16',
      title: '또박또박_테스트체_16',
      maker: '안싸피_16',
      content: '다람쥐 헌 쳇바퀴에 타고파_16',
    },      
    {
      id: '17',
      title: '또박또박_테스트체_17',
      maker: '안싸피_17',
      content: '다람쥐 헌 쳇바퀴에 타고파_17',
    },      
    {
      id: '18',
      title: '또박또박_테스트체_18',
      maker: '안싸피_18',
      content: '다람쥐 헌 쳇바퀴에 타고파_18',
    },      
    {
      id: '19',
      title: '또박또박_테스트체_19',
      maker: '안싸피_19',
      content: '다람쥐 헌 쳇바퀴에 타고파_19',
    },
    {
      id: '1',
      title: '또박또박_테스트체_1',
      maker: '김싸피_1',
      content: '다람쥐 헌 쳇바퀴에 타고파_1',
    },
    {
      id: '2',
      title: '또박또박_테스트체_2',
      maker: '이싸피_2',
      content: '다람쥐 헌 쳇바퀴에 타고파_2',
    },
    {
      id: '3',
      title: '또박또박_테스트체_3',
      maker: '박싸피_3',
      content: '다람쥐 헌 쳇바퀴에 타고파_3',
    },
    {
      id: '4',
      title: '또박또박_테스트체_4',
      maker: '최싸피_4',
      content: '다람쥐 헌 쳇바퀴에 타고파_4',
    },
    {
      id: '5',
      title: '또박또박_테스트체_5',
      maker: '정싸피_5',
      content: '다람쥐 헌 쳇바퀴에 타고파_5',
    },
    {
      id: '6',
      title: '또박또박_테스트체_6',
      maker: '양싸피_6',
      content: '다람쥐 헌 쳇바퀴에 타고파_6',
    },
    {
      id: '7',
      title: '또박또박_테스트체_7',
      maker: '위싸피_7',
      content: '다람쥐 헌 쳇바퀴에 타고파_7',
    },
    {
      id: '8',
      title: '또박또박_테스트체_8',
      maker: '안싸피_8',
      content: '다람쥐 헌 쳇바퀴에 타고파_8',
    },      
    {
      id: '9',
      title: '또박또박_테스트체_9',
      maker: '정싸피_9',
      content: '다람쥐 헌 쳇바퀴에 타고파_9',
    },
    {
      id: '10',
      title: '또박또박_테스트체_10',
      maker: '양싸피_10',
      content: '다람쥐 헌 쳇바퀴에 타고파_10',
    },
    {
      id: '11',
      title: '또박또박_테스트체_11',
      maker: '위싸피_11',
      content: '다람쥐 헌 쳇바퀴에 타고파_11',
    },
    {
      id: '12',
      title: '또박또박_테스트체_12',
      maker: '안싸피_12',
      content: '다람쥐 헌 쳇바퀴에 타고파_12',
    },{
      id: '13',
      title: '또박또박_테스트체_13',
      maker: '양싸피_13',
      content: '다람쥐 헌 쳇바퀴에 타고파_13',
    },
    {
      id: '14',
      title: '또박또박_테스트체_14',
      maker: '위싸피_14',
      content: '다람쥐 헌 쳇바퀴에 타고파_14',
    },
    {
      id: '15',
      title: '또박또박_테스트체_15',
      maker: '안싸피_15',
      content: '다람쥐 헌 쳇바퀴에 타고파_15',
    },
    {
      id: '16',
      title: '또박또박_테스트체_16',
      maker: '안싸피_16',
      content: '다람쥐 헌 쳇바퀴에 타고파_16',
    },      
    {
      id: '17',
      title: '또박또박_테스트체_17',
      maker: '안싸피_17',
      content: '다람쥐 헌 쳇바퀴에 타고파_17',
    },      
    {
      id: '18',
      title: '또박또박_테스트체_18',
      maker: '안싸피_18',
      content: '다람쥐 헌 쳇바퀴에 타고파_18',
    },      
    {
      id: '19',
      title: '또박또박_테스트체_19',
      maker: '안싸피_19',
      content: '다람쥐 헌 쳇바퀴에 타고파_19',
    },
  ];

// 검색어에 따라 폰트를 필터링하는 함수
const getFilteredFonts = () => {
  if (!searchTerm) return fonts;
  return fonts.filter(
    (font) =>
      font.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      font.maker.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

  const renderFontBoxes = () => {
   // 필터링된 폰트 목록
   const filteredFonts = getFilteredFonts();

   // 현재 페이지에 맞게 폰트 배열을 자르기
   const start = (currentPage - 1) * ITEMS_PER_PAGE;
   const end = start + ITEMS_PER_PAGE;
   const currentFonts = filteredFonts.slice(start, end);

   // 현재 페이지의 폰트 목록을 렌더링
   return currentFonts.map((font) => (
     <FontBoxComponent
       key={font.id}
       id={font.id}
       title={font.title}
       maker={font.maker}
       content={font.content}
     />
   ));
 };

  // 페이지 번호 생성 함수
  const renderMiniManuscriptPagination = () => {
    const pageCount = Math.ceil(getFilteredFonts().length / ITEMS_PER_PAGE);
    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
    
    return (
      <MiniManuscript
        pages={pages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    );
  };

  const options = [
    '단정한',
    '가지런한',
    '둥글둥글',
    '네모네모',
    '삐뚤빼뚤',
    '귀여운',
    '문서체',
    '어른같은',
    '아이같은',
    '자유로운',
  ];

  const renderFilterOptions = () => {
    return (
      <div className={classes.filterOptions}>
        {options.map((option, index) => (
          <label key={index}>
            <input type="checkbox" className={classes.checkbox} />
            {' ' + option}
          </label>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.topContainer}>
          <PageTitle>
            <span>모든 폰트</span>
          </PageTitle>
          <div className={classes.searchBar}>
            <input
              type="text"
              placeholder="폰트명, 제작자 검색"
              value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // 검색시에는 항상 첫 페이지로 리셋
            }}
            />
            <FaSistrix size={24} color="black" />
          </div>
          <div className={classes.filterBarWrapper}>
            <div
              className={`${classes.filterBar} ${showFilterOptions ? classes.filterBarActive : ''}`}
              onClick={() => setShowFilterOptions(!showFilterOptions)}
            >
              폰트 필터링
              <FaAngleDown
                size={22}
                color="gray"
                style={{ marginLeft: '4px' }}
                className={`${classes.filterIcon} ${
                  showFilterOptions ? classes.filterIconActive : ''
                }`}
              />
            </div>
            {showFilterOptions && renderFilterOptions()}
          </div>
        </div>
        <div className={classes.fontBoxContainer}>{renderFontBoxes()}</div>
        <div className={classes.paginationContainer}>{renderMiniManuscriptPagination()}</div>

        </div>
    </>
  )
}
export default FontListPage
