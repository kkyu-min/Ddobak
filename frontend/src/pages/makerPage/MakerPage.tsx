import classes from './MakerPage.module.css';
import {
  MakerTopBox,
  MakerBottomBox,
  MakerName,
  MakerSmallBox,
  MakerComment,
  MakerLikeCount,
  MakerBottomHeaderBox,
  MakerBottomHeaderText,
  MakerFontLargeBox,
  MakerFontSmallBox,
  MakerFontNameText,
  MakerFontCommentText,
  MakerCommemtBox,
} from './makerPageComponents/MakerPageComponents';
import { FaHeart } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
// 빈 하트 FaRegHeart
import { FaCircleUser } from 'react-icons/fa6';
import { borderColor } from 'common/colors/CommonColors';
import { getData } from 'https/http';
import { useDispatch, useSelector } from 'react-redux';
import { changeMakerIntroModalActions } from 'store/changeMakerIntroSlice';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makerIntroRequest } from 'https/utils/FontFunction';
import {
  followCheckAPI,
  followCreateAPI,
  followDeleteAPI,
  getCountFollowing,
} from 'https/utils/FollowFunction';
import { getProfileImg } from 'https/utils/AuthFunction';

// API로부터 받아올 폰트 데이터의 타입을 정의
// type Font = {
//   fontFileUrl: string;
//   fontId: string;
//   introduceContext: string;
//   keywords: string[];
//   producerName: string;
//   fontName: string;
// };

interface ChangeMakerIntroType {
  changeMakerIntro: {
    wantChange: boolean;
    makerIntro: string;
  };
}

const MakerPage: React.FC = () => {
  const dispatch = useDispatch();
  const { makerName, makerId } = useParams();

  const [myId, setMyId] = useState<string>('');
  const [makerIntro, setMakerIntro] = useState<string>('');
  const [followingStatus, setFollowingStatus] = useState<boolean>();
  const [followingCount, setFollowingCount] = useState<number>();
  const [makerProfileImg, setMakerProfileImg] = useState<string>('');

  const wantChange = useSelector(
    (state: ChangeMakerIntroType) => state.changeMakerIntro.wantChange,
  );
  const storedMakerIntro = useSelector(
    (state: ChangeMakerIntroType) => state.changeMakerIntro.makerIntro,
  );

  const handleHeartClick = async () => {

    // 팔로우 상태를 변경합니다.
    if (followingStatus) {
      await followDeleteAPI(makerId || '');
    } else {
      await followCreateAPI(makerId || '');
    }

    // 새로운 팔로잉 수를 가져옵니다.
    const newFollowingCount = await getCountFollowing(makerId || '');

    // 상태를 업데이트합니다.
    setFollowingStatus(!followingStatus);
    setFollowingCount(newFollowingCount);
  };

  useEffect(() => {
    async function fetch() {
      const currentId = await getData('id');
      setMyId(currentId);
    }

    fetch();
  }, []);
  
  useEffect(() => {
    // 팔로우 상태 가져오기
    if (makerId) {
      followCheckAPI(makerId).then(async (r) => {
        setFollowingStatus(r);
      });
      
      getCountFollowing(makerId).then(async (r) => {
        setFollowingCount(r);
      });

      // 제작자 소개글 가져오기
      makerIntroRequest(makerId).then(async (r) => {
        setMakerIntro(r.infoText);
      });

      // 제작자 프로필 이미지 가져오기
      getProfileImg(makerId).then(async (r) => {
        console.log('여기', r)
        setMakerProfileImg(r);
      })
    }
  }, [makerId]);

  useEffect(() => {
    setMakerIntro(storedMakerIntro);
  }, [wantChange, storedMakerIntro]);

  return (
    <div className={classes.container}>
      <MakerTopBox>
        <MakerSmallBox>
          {makerProfileImg ? (
            <>
              <img src={makerProfileImg} alt="프로필 이미지" className={classes.ImgStyle} />
            </>
          ) : (
            <>
              <FaCircleUser color={borderColor} className={classes.ImgStyle} />
            </>
          )}
          <div className={classes.pr}>
            <MakerName>{makerName}</MakerName>
            {myId.toString() === makerId ? (
              <div className={classes.pencil}>
                <FaPencil
                  className={classes.pencilText}
                  size={30}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    dispatch(
                      changeMakerIntroModalActions.loadMakerIntro({ changeMakerIntro: makerIntro }),
                    );
                    dispatch(changeMakerIntroModalActions.toggle());
                  }}
                />
              </div>
            ) : null}
          </div>
        </MakerSmallBox>
        <div className={classes.prCentered}>
          <MakerSmallBox>
            <MakerComment>{makerIntro}</MakerComment>
          </MakerSmallBox>
        </div>
        <MakerSmallBox>
          {followingStatus ? (
            <FaHeart size={40} color={'#d71718'} onClick={handleHeartClick} />
          ) : (
            <FaHeart size={40} color={'#b6b6b6'} onClick={handleHeartClick} />
          )}
          <MakerLikeCount>{followingCount}</MakerLikeCount>
        </MakerSmallBox>
      </MakerTopBox>
      {/* 상하 구분 */}
      <MakerBottomBox>
        <MakerBottomHeaderBox>
          <MakerBottomHeaderText>{makerName} 님이 만든 폰트</MakerBottomHeaderText>
        </MakerBottomHeaderBox>
        <MakerFontLargeBox>
          <MakerFontSmallBox>
            <MakerCommemtBox>
              <MakerFontNameText>또박또박_테스트체</MakerFontNameText>
            </MakerCommemtBox>

            <MakerFontCommentText>다람쥐 헌 쳇바퀴 타고파</MakerFontCommentText>
          </MakerFontSmallBox>
        </MakerFontLargeBox>
      </MakerBottomBox>
    </div>
  );
};
export default MakerPage;
