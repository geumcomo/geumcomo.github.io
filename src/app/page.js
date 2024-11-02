"use client"
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f4f4f4;
`;

const Header = styled.header`
  background: #282c34;
  color: white;
  padding: 20px;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Footer = styled.footer`
  margin-top: 20px;
`;

export default function HomePage() {
  return (
    <Container>
      <Header>
        <h1>개발자 포트폴리오</h1>
        <p>안녕하세요! 저는 [당신의 이름]입니다. 웹 개발자입니다.</p>
      </Header>
      <section>
        <h2>프로젝트</h2>
        <ProjectList>
          <li>프로젝트 1: 설명</li>
          <li>프로젝트 2: 설명</li>
          <li>프로젝트 3: 설명</li>
        </ProjectList>
      </section>
      <section>
        <h2>기술 스택</h2>
        <p>React, Node.js, JavaScript, CSS 등</p>
      </section>
      <Footer>
        <p>연락처: [이메일 주소]</p>
        <div>
          <a href="[GitHub 링크]"><FaGithub size={30} /></a>
          <a href="[LinkedIn 링크]"><FaLinkedin size={30} /></a>
        </div>
      </Footer>
    </Container>
  );
}
