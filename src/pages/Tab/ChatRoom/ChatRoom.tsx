import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Button, Input, Dropdown, Menu, Modal } from 'antd';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  MessageOutlined,
  LikeOutlined,
  SmileOutlined,
  FrownOutlined,
  DislikeOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';
import {
  Root,
  Header,
  ChatContainer,
  MessageContainer,
  MessageHeader,
  MessageBody,
  ReactionContainer,
  InputContainer,
} from './styled';

const { TextArea } = Input;

// Props 타입 정의
type ChatRoomProps = {
  className?: string;
}

// 메시지 타입 정의
type Message = {
  author: {
    name: string;
  };
  content: string;
  created_at: string;
  id?: number;  // optional ID field
};

// 채팅방 참여자 타입 정의
type Member = {
  name: string;
};

type ChatDetails = {
  chats: Message[];
  members: Member[];  
};

export const ChatRoom: FC<ChatRoomProps> = ({ className }) => {
  const navigate = useNavigate(); 
  const { id } = useParams<{ id: string }>(); 
  const [messages, setMessages] = useState<Message[]>([]); 
  const [newMessage, setNewMessage] = useState<string>(''); 
  const [reportVisible, setReportVisible] = useState<boolean>(false); 
  const [reportMessageId, setReportMessageId] = useState<number | null>(null);
  const [reportContent, setReportContent] = useState<string>('');
  
  const fetchMessages = async () => {
    try {
      const response = await axios.get('API_URL'); // 메세지 api
      const newMessages: Message[] = response.data.data.chat; 
      setMessages(prevMessages => [...prevMessages, ...newMessages]);
    } catch (error) {
      console.error('메시지 로드 오류:', error);
    }
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        author: { name: "이름" }, // 실제 사용자 이름 할당
        content: newMessage,
        created_at: new Date().toISOString(),
      }
      
      setMessages((prevMessages) => [...prevMessages, { ...newMsg, id: prevMessages.length + 1 }]);
      setNewMessage('');
    }
  }

  const handleReactionClick = (reaction: string) => {
    setNewMessage(prev => prev + reaction); 
  }

  const handleReportMessage = (messageId: number) => {
    setReportMessageId(messageId);
    setReportVisible(true);
  }

  const handleSubmitReport = async () => {
    if (reportContent.trim() && reportMessageId !== null) {
      try {
        const response = await axios.post('YOUR_REPORT_API', {// 신고 api
          messageId: reportMessageId,
          content: reportContent,
        });

        // 성공 메시지 표시
        Modal.success({
          content: response.data.message,
        });
      } catch (error) {
        console.error('신고 오류:', error);
        Modal.error({
          content: '신고하는 중 오류가 발생했습니다.',
        });
      } finally {
        setReportVisible(false);
        setReportContent('');
        setReportMessageId(null);
      }
    }
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => console.log('채팅방 알림 끄기')}>채팅방 정보</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => console.log('채팅방 알림 끄기')}>채팅방 알림 끄기</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => console.log('채팅방 나가기')}>채팅방 나가기</a>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    fetchMessages();

    const interval = setInterval(() => {
      fetchMessages();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Root className={className}>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button 
          onClick={() => navigate(`/tab/group/details/${id}`)} 
          style={{ border: 'none', marginRight: 'auto', padding: 0 }}>
          <ArrowLeftOutlined /> 
        </Button>
        <Typography.Title level={4} style={{ textAlign: 'center', flexGrow: 1 }}>대화방</Typography.Title>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button icon={<MessageOutlined />} />
        </Dropdown>
      </Header>
      <ChatContainer>
        {messages.map((msg, index) => (
          <MessageContainer key={index} style={{
            alignSelf: msg.author.name === "이름" ? 'flex-end' : 'flex-start',
            width: msg.author.name === "이름" ? 'calc(33.33% - 16px)' : 'calc(66.67% - 16px)',
            marginLeft: msg.author.name === "이름" ? 'auto' : '0',
          }}>
            <MessageHeader>
              <Typography.Text strong>{msg.author.name}</Typography.Text>
              <Typography.Text type="secondary">
                {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Typography.Text>
            </MessageHeader>
            <MessageBody>
              <Typography.Text>{msg.content}</Typography.Text>
              <Button type="link" onClick={() => handleReportMessage(index)} style={{ float: 'right' }}>신고</Button>
            </MessageBody>
          </MessageContainer>
        ))}
      </ChatContainer>
      <InputContainer>
        <TextArea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onPressEnter={(e) => {
            e.preventDefault(); 
            handleSendMessage();
          }}
          placeholder="메시지를 입력하세요..."
          autoSize={{ minRows: 1, maxRows: 4 }} 
        />
        <Button type="primary" onClick={handleSendMessage}>
          전송
        </Button>
      </InputContainer>
      <ReactionContainer>
        <LikeOutlined onClick={() => handleReactionClick('👍')} />
        <SmileOutlined onClick={() => handleReactionClick('😊')} />
        <FrownOutlined onClick={() => handleReactionClick('😞')} />
        <DislikeOutlined onClick={() => handleReactionClick('👎')} />
      </ReactionContainer>

      <Modal
        title="신고하기"
        visible={reportVisible}
        onCancel={() => setReportVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setReportVisible(false)}>
            취소
          </Button>,
          <Button key="confirm" type="primary" onClick={handleSubmitReport}>
            제출
          </Button>
        ]}
      >
        <Typography.Text>신고 유형을 선택하세요:</Typography.Text>
        <Button>스팸</Button>
        <Button>부적절한 내용</Button>
        <Button>욕설</Button>
        <Button>기타</Button>
        <TextArea
          value={reportContent}
          onChange={(e) => setReportContent(e.target.value)}
          placeholder="상세 내용을 입력하세요 (30자 이내)"
          maxLength={30}
        />
      </Modal>
      
    </Root>
  );
}
