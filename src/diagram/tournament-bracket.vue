<template>
<div class="control-section tournament-result-container">
  <div class="sample-section">
      <ejs-diagram 
          ref="diagramObj" 
          id="footballResultDiagram" 
          :width="width" 
          :height="height" 
          :nodes="nodes" 
          :connectors="connectors" 
          :getConnectorDefaults="getConnectorDefaults"
          :snapSettings="snapSettings"
          :scrollSettings="scrollSettings"
          :tool="tool"
          :load="load">
      </ejs-diagram>
      <div class="loading" v-show="showLoading">
          <span>Loading Tournament Results...</span>
      </div>
  </div>
</div>
<div id="action-description">
    <p>
      This sample interactively visualizes a UEFA Champions League tournament bracket using the Syncfusion<sup>®</sup> EJ2 Vue Diagram component, showcasing team progression through match results, winning teams, flip-card animations, and informative tooltip.
    </p>
</div>
<div id="description">
    <p>
      This visually engaging UEFA Champions League bracket uses custom HTML nodes to display match details, including teams and scores. Flip-card animations reveal match results, clearly highlighting the winning teams. Animated connectors dynamically illustrate team progression, while interactive tooltip provide comprehensive match statistics. The ultimate champion is distinctly marked with a custom node and dynamic animations.
    </p>
    <br>
</div>
</template>

<style>
  .tournament-result-container {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      height: 100vh;
      overflow: hidden;
      font-family: 'Verdana', sans-serif;
      background: linear-gradient(135deg, #001122 0%, #003366 25%, #004488 50%, #003366 75%, #001122 100%);
      position: relative;
  }

  /* UEFA Champions League themed animated background */
  .tournament-result-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
          radial-gradient(circle at 20% 80%, rgba(0, 51, 102, 0.6) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(0, 68, 136, 0.4) 0%, transparent 50%);
      pointer-events: none;
  }

  /* UEFA Stars Pattern */
  .tournament-result-container::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
          radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
          radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.2), transparent),
          radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.4), transparent),
          radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.3), transparent);
      background-repeat: repeat;
      background-size: 150px 100px;
      animation: starTwinkle 8s ease-in-out infinite;
      pointer-events: none;
  }

  @keyframes starTwinkle {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.8; }
  }

  .tournament-result-container .sample-section {
      height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 1;
  }

  .tournament-result-container #footballResultDiagram {
      flex: 1;
      width: 100%;
      background: transparent;
  }
  
  .tournament-result-container #footballResultDiagramcontent{
      overflow: hidden !important;
      animation: zoomOutEffect 3s ease-out;
  }

  @keyframes zoomOutEffect {
      0% { 
          transform: scale(1.3);
          opacity: 0.8;
      }
      100% { 
          transform: scale(1);
          opacity: 1;
      }
  }

  /* Enhanced Tournament node styles with UEFA theme */
  .tournament-result-container .tournament-node {
      cursor: pointer;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      overflow: hidden;
      position: relative;
      min-width: 110px;
      min-height: 55px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 
          0 8px 25px rgba(0, 0, 0, 0.4),
          0 0 20px rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .tournament-result-container .tournament-node:hover {
      transform: translateY(-8px) scale(1.08);
      box-shadow: 
          0 25px 50px rgba(0, 0, 0, 0.6),
          0 0 40px rgba(0, 102, 204, 0.5),
          inset 0 1px 0 rgba(255, 255, 255, 0.3);
      transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
      border-color: rgba(0, 102, 204, 0.8);
  }

  /* Enhanced flip card animation */
  .tournament-result-container .flip-card {
      width: 100%;
      height: 100%;
      position: relative;
      perspective: 1200px;
  }

  .tournament-result-container .flip-card-inner {
      width: 100%;
      height: 100%;
      transition: transform 0.9s cubic-bezier(0.4,0,0.2,1);
      transform-style: preserve-3d;
      position: relative;
      transform: rotateY(0deg); /* Start showing front */
      animation: delayedFlip 0.6s cubic-bezier(0.4,0,0.2,1) both; /* Reduced from 0.9s */
  }

  .tournament-result-container .flip-card-inner .flip-card-front,
  .tournament-result-container .flip-card-inner .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0; 
      left: 0;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
  }

  .tournament-result-container .flip-card-inner .flip-card-front {
      z-index: 2;
      background: linear-gradient(135deg, rgba(0, 51, 102, 0.9) 0%, rgba(0, 68, 136, 0.9) 100%);
  }

  .tournament-result-container .flip-card-inner .flip-card-back {
      transform: rotateY(180deg);
      z-index: 1;
      background: linear-gradient(135deg, rgba(0, 51, 102, 0.95) 0%, rgba(0, 68, 136, 0.95) 100%);
  }

  /* UEFA Champions League themed team sections */
  .tournament-result-container .team-section {
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-weight: 700;
      font-size: 14px;
      color: white;
      padding: 0 15px;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
      position: relative;
      border: none;
      background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 100%);
  }

  .tournament-result-container .team-section .team-name {
      flex: 1 1 auto;
      text-align: left;
      font-weight: 800;
      letter-spacing: 0.8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 40px;
      text-transform: uppercase;
  }

  .tournament-result-container .team-section .team-score.score-right {
      position: absolute;
      right: 15px;
      font-size: 16px;
      font-weight: 900;
      color: #fff !important;
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
      min-width: 25px;
      text-align: right;
      z-index: 2;
      background: rgba(0, 0, 0, 0.3);
      padding: 2px 6px;
      border-radius: 4px;
  }

  /* Enhanced Winner highlighting with UEFA colors */
  .tournament-result-container .team-section.winner {
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%) !important;
      color: #1a1a1a !important;
      box-shadow: 
          0 0 20px rgba(255, 215, 0, 0.6),
          inset 0 2px 0 rgba(255, 255, 255, 0.4),
          inset 0 -1px 0 rgba(0, 0, 0, 0.2);
      font-weight: 900;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      animation: winnerGlow 2s ease-in-out infinite alternate;
  }

  .tournament-result-container .team-section.winner .team-name,
  .tournament-result-container .team-section.winner .team-score {
      text-shadow: 0 1px 2px rgba(67, 55, 0, 0.5);
      font-weight: 900;
  }

  @keyframes winnerGlow {
      0% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.6), inset 0 2px 0 rgba(255, 255, 255, 0.4); }
      100% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.9), inset 0 2px 0 rgba(255, 255, 255, 0.6); }
  }

  /* UEFA themed gradient colors for different rounds */
  .tournament-result-container .round16-node .team-section.team-top {
      background: linear-gradient(135deg, #003366 0%, #0066cc 100%);
  }
  .tournament-result-container .round16-node .team-section.team-bottom {
      background: linear-gradient(135deg, #004488 0%, #0077dd 100%);
  }

  .tournament-result-container .quarterfinal-node .team-section.team-top {
      background: linear-gradient(135deg, #001a33 0%, #004080 100%);
  }
  .tournament-result-container .quarterfinal-node .team-section.team-bottom {
      background: linear-gradient(135deg, #002244 0%, #0055aa 100%);
  }

  .tournament-result-container .semifinal-node .team-section.team-top {
      background: linear-gradient(135deg, #000d1a 0%, #003366 100%);
  }
  .tournament-result-container .semifinal-node .team-section.team-bottom {
      background: linear-gradient(135deg, #001122 0%, #004488 100%);
  }

  .tournament-result-container .final-node .team-section.team-top {
      background: linear-gradient(135deg, #000611 0%, #002244 100%);
  }
  .tournament-result-container .final-node .team-section.team-bottom {
      background: linear-gradient(135deg, #000a1a 0%, #003366 100%);
  }

  /* Enhanced Champion Node with UEFA styling */
  .tournament-result-container .champion-node {
      background: linear-gradient(135deg, #001122 0%, #003366 50%, #0066cc 100%);
      border: 4px solid #FFD700;
      border-radius: 20px;
      position: relative;
      overflow: visible;
      animation: championGlow 3s ease-in-out infinite;
      box-shadow: 
          0 20px 50px rgba(0, 102, 204, 0.5),
          0 0 40px rgba(255, 215, 0, 0.4),
          inset 0 2px 0 rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .tournament-result-container .champion-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 25px 20px;
  }

  .tournament-result-container .champion-badge {
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
      box-shadow: 
          0 10px 25px rgba(0, 0, 0, 0.3),
          inset 0 2px 0 rgba(255, 255, 255, 0.6),
          0 0 20px rgba(255, 215, 0, 0.5);
      flex-shrink: 0;
      border: 3px solid #fff;
  }

  .tournament-result-container .champion-trophy {
      font-size: 38px;
      animation: trophyBounce 2s ease-in-out infinite;
      transform-origin: center bottom;
  }

  @keyframes trophyBounce {
      0%, 20%, 50%, 80%, 100% {
          transform: translateY(0) scale(1);
      }
      40% {
          transform: translateY(-10px) scale(1.1);
      }
      60% {
          transform: translateY(-5px) scale(1.05);
      }
  }

  .tournament-result-container .champion-title {
      font-family: 'Verdana', sans-serif;
      font-size: 18px;
      font-weight: 900;
      color: #FFD700;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
      margin-bottom: 10px;
      letter-spacing: 3px;
      line-height: 1.2;
      text-transform: uppercase;
  }

  .tournament-result-container .champion-team {
      font-family: 'Verdana', sans-serif;
      font-size: 20px;
      font-weight: 900;
      color: #ffffff;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
      letter-spacing: 1.5px;
      line-height: 1.1;
      margin-bottom: 6px;
      text-transform: uppercase;
  }

  .tournament-result-container .champion-year {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 700;
      letter-spacing: 2px;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  }

  .tournament-result-container .team-score.score-right {
      display: flex;
      justify-content: center;
      align-items: center;
  }

  /* Enhanced Champion Animations */
  @keyframes championGlow {
      0%, 100% { 
          box-shadow: 
              0 20px 50px rgba(0, 102, 204, 0.5),
              0 0 40px rgba(255, 215, 0, 0.4),
              inset 0 2px 0 rgba(255, 255, 255, 0.3);
          border-color: #FFD700;
      }
      50% { 
          box-shadow: 
              0 25px 60px rgba(0, 102, 204, 0.7),
              0 0 60px rgba(255, 215, 0, 0.7),
              inset 0 2px 0 rgba(255, 255, 255, 0.5);
          border-color: #FFA500;
      }
  }

  /* Progressive flip animation delays */
  .tournament-result-container .round16-node .flip-card-inner:nth-of-type(1) { animation-delay: 0.3s; }
  .tournament-result-container .round16-node .flip-card-inner:nth-of-type(2) { animation-delay: 0.4s; }
  .tournament-result-container .round16-node .flip-card-inner:nth-of-type(3) { animation-delay: 0.5s; }
  .tournament-result-container .round16-node .flip-card-inner:nth-of-type(4) { animation-delay: 0.6s; }
  .tournament-result-container .round16-node .flip-card-inner:nth-of-type(5) { animation-delay: 0.7s; }
  .tournament-result-container .round16-node .flip-card-inner:nth-of-type(6) { animation-delay: 0.8s; }
  .tournament-result-container .round16-node .flip-card-inner:nth-of-type(7) { animation-delay: 0.9s; }
  .tournament-result-container .round16-node .flip-card-inner:nth-of-type(8) { animation-delay: 1.0s; }

  .tournament-result-container .quarterfinal-node .flip-card-inner:nth-of-type(1) { animation-delay: 1.3s; }
  .tournament-result-container .quarterfinal-node .flip-card-inner:nth-of-type(2) { animation-delay: 1.4s; }
  .tournament-result-container .quarterfinal-node .flip-card-inner:nth-of-type(3) { animation-delay: 1.5s; }
  .tournament-result-container .quarterfinal-node .flip-card-inner:nth-of-type(4) { animation-delay: 1.6s; }

  .tournament-result-container .semifinal-node .flip-card-inner:nth-of-type(1) { animation-delay: 1.9s; }
  .tournament-result-container .semifinal-node .flip-card-inner:nth-of-type(2) { animation-delay: 2.0s; }

  .tournament-result-container .final-node .flip-card-inner { animation-delay: 2.6s; }

  .tournament-result-container .champion-node .champion-info {
      animation: championReveal 0.8s ease-in-out 2.8s both; /* Reduced from 5.2s */
  }

  @keyframes championReveal {
      0% { opacity: 0; transform: scale(0.8); }
      100% { opacity: 1; transform: scale(1); }
  }

  @keyframes delayedFlip {
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(180deg); }
  }

  .tournament-result-container .loading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #FFD700;
      font-size: 22px;
      letter-spacing: 2px;
      font-family: 'Verdana', sans-serif;
      text-align: center;
      text-shadow: 0 3px 6px rgba(0,0,0,0.7);
      font-weight: 700;
      text-transform: uppercase;
  }

  /* Enhanced node decorations */
  .tournament-result-container .tournament-node::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      z-index: 1;
  }

  /* Tooltip Styles */
  /* Hide tooltip background */
  .e-tooltip-wrap.e-popup.e-diagram-tooltip:has(.football-results-tooltip-content) {
      background-color: transparent !important;
      border:  none !important;
      box-shadow: none !important;
  }

  .e-tooltip-wrap:has(.football-results-tooltip-content) .e-tip-content {
      padding: 0px !important;
  }

  .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-inner.e-tip-right,
  .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-inner.e-tip-left,
  .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-inner.e-tip-bottom,
  .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-inner.e-tip-top {
      color: #001122 !important;
  }

  /* Outer arrow tips for different positions - only for football tooltips */
  .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-outer.e-tip-top {
      border-bottom-color: #001122 !important;
  }

  .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-outer.e-tip-bottom {
      border-top-color: #001122 !important;
  }

  .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-outer.e-tip-left {
      border-right-color: #001122 !important;
  }

  .e-tooltip-wrap:has(.football-results-tooltip-content) .e-arrow-tip-outer.e-tip-right {
      border-left-color: #001122 !important;
  }

  /* Define the stroke color change animation */
  @keyframes pathStrokeActivate {
      0% {
          stroke: #0066cc; /* Original color */
      }
      100% {
          stroke: #d2e8ff; /* Target color */
      }
  }
  
  /* Round of 16 to Quarter-final paths */
  #quarter1_1_path { animation: pathStrokeActivate 0.2s ease-in-out 0.8s both; stroke-width: 3; }
  #quarter1_2_path { animation: pathStrokeActivate 0.2s ease-in-out 0.9s both; stroke-width: 3; }
  #quarter2_1_path { animation: pathStrokeActivate 0.2s ease-in-out 1.0s both; stroke-width: 3; }
  #quarter2_2_path { animation: pathStrokeActivate 0.2s ease-in-out 1.1s both; stroke-width: 3; }
  #quarter3_1_path { animation: pathStrokeActivate 0.2s ease-in-out 1.2s both; stroke-width: 3; }
  #quarter3_2_path { animation: pathStrokeActivate 0.2s ease-in-out 1.3s both; stroke-width: 3; }
  #quarter4_1_path { animation: pathStrokeActivate 0.2s ease-in-out 1.4s both; stroke-width: 3; }
  #quarter4_2_path { animation: pathStrokeActivate 0.2s ease-in-out 1.5s both; stroke-width: 3; }
  /* Quarter-final to Semi-final paths */
  #semi1_1_path { animation: pathStrokeActivate 0.2s ease-in-out 1.8s both; stroke-width: 3; }
  #semi1_2_path { animation: pathStrokeActivate 0.2s ease-in-out 1.9s both; stroke-width: 3; }
  #semi2_1_path { animation: pathStrokeActivate 0.2s ease-in-out 2.0s both; stroke-width: 3; }
  #semi2_2_path { animation: pathStrokeActivate 0.2s ease-in-out 2.1s both; stroke-width: 3; }
  /* Semi-final to Final */
  #final1_path    { animation: pathStrokeActivate 0.2s ease-in-out 2.4s both; stroke-width: 3; }
  #final2_path    { animation: pathStrokeActivate 0.2s ease-in-out 2.5s both; stroke-width: 3; }
  /* Final to Champion */
  #champ1_path    { animation: pathStrokeActivate 0.2s ease-in-out 3.1s both; stroke-width: 3; }
          
  /* Responsive design */
  @media (max-width: 1200px) {
      .tournament-result-container .tournament-node { border-radius: 12px; }
      .tournament-result-container .team-section { font-size: 10px; padding: 0 12px; }
      .tournament-result-container .champion-title { font-size: 13px; }
      .tournament-result-container .champion-team { font-size: 16px; }
      .tournament-result-container .champion-badge { width: 50px; height: 50px; }
      .tournament-result-container .champion-trophy { font-size: 24px; }
  }

  @media (max-width: 768px) {
      .tournament-result-container .team-section { font-size: 9px; padding: 0 10px; }
      .tournament-result-container .team-section .team-score.score-right { font-size: 14px; right: 10px; }
      .tournament-result-container .champion-title { font-size: 12px; }
      .tournament-result-container .champion-team { font-size: 15px; }
      .tournament-result-container .champion-badge { width: 45px; height: 45px; }
      .tournament-result-container .champion-trophy { font-size: 22px; }
  }
</style>

<script>
import {
  DiagramComponent,
  NodeConstraints,
  DiagramTools,
  SnapConstraints
} from "@syncfusion/ej2-vue-diagrams";

export default {
  components: {
    'ejs-diagram': DiagramComponent
  },
  data() {
    return {
      width: "100%",
      height: "100%",
      nodes: [],
      connectors: [],
      showLoading: true,
      
      // UEFA Champions League 2023-24 Tournament Data
      tournamentData: [
        // Round of 16 matches
        { id: 'round16_1', team1: 'BAYERN MUNCHEN', score1: 3, team2: 'LAZIO', score2: 1, winner: 'BAYERN MUNCHEN', matchType: 'round16' },
        { id: 'round16_2', team1: 'ARSENAL', score1: 1, shootoutTeam1: '4', team2: 'PORTO', score2: 1, shootoutTeam2: '2', winner: 'ARSENAL', matchType: 'round16' },
        { id: 'round16_3', team1: 'COPENHAGEN', score1: 2, team2: 'MANCHESTER CITY', score2: 6, winner: 'MANCHESTER CITY', matchType: 'round16' },
        { id: 'round16_4', team1: 'LEIPZIG', score1: 1, team2: 'REAL MADRID', score2: 2, winner: 'REAL MADRID', matchType: 'round16' },
        { id: 'round16_5', team1: 'BORUSSIA DORTMUND', score1: 3, team2: 'PSV EINDHOVEN', score2: 1, winner: 'BORUSSIA DORTMUND', matchType: 'round16' },
        { id: 'round16_6', team1: 'ATLETICO MADRID', score1: 2, shootoutTeam1: '3', team2: 'INTER MILAN', score2: 2, shootoutTeam2: '2', winner: 'ATLETICO MADRID', matchType: 'round16' },
        { id: 'round16_7', team1: 'REAL SOCIEDAD', score1: 1, team2: 'PARIS SAINT-GERMAIN', score2: 4, winner: 'PARIS SAINT-GERMAIN', matchType: 'round16' },
        { id: 'round16_8', team1: 'BARCELONA', score1: 4, team2: 'NAPOLI', score2: 2, winner: 'BARCELONA', matchType: 'round16' },
        
        // Quarterfinal matches
        { id: 'quarter1', team1: 'BAYERN MUNCHEN', score1: 3, team2: 'ARSENAL', score2: 2, winner: 'BAYERN MUNCHEN', matchType: 'quarterfinal' },
        { id: 'quarter2', team1: 'MANCHESTER CITY', score1: 4, shootoutTeam1: '3', team2: 'REAL MADRID', score2: 4, shootoutTeam2: '4', winner: 'REAL MADRID', matchType: 'quarterfinal' },
        { id: 'quarter3', team1: 'BORUSSIA DORTMUND', score1: 5, team2: 'ATLETICO MADRID', score2: 4, winner: 'BORUSSIA DORTMUND', matchType: 'quarterfinal' },
        { id: 'quarter4', team1: 'BARCELONA', score1: 4, team2: 'PARIS SAINT-GERMAIN', score2: 6, winner: 'PARIS SAINT-GERMAIN', matchType: 'quarterfinal' },
        
        // Semifinal matches
        { id: 'semi1', team1: 'BAYERN MUNCHEN', score1: 3, team2: 'REAL MADRID', score2: 4, winner: 'REAL MADRID', matchType: 'semifinal' },
        { id: 'semi2', team1: 'PARIS SAINT-GERMAIN', score1: 0, team2: 'BORUSSIA DORTMUND', score2: 2, winner: 'BORUSSIA DORTMUND', matchType: 'semifinal' },
        
        // Final match
        { id: 'final', team1: 'REAL MADRID', score1: 2, team2: 'BORUSSIA DORTMUND', score2: 0, winner: 'REAL MADRID', matchType: 'final' },
        
        // Champion
        { id: 'champion', team1: 'REAL MADRID', team2: 'BORUSSIA DORTMUND', score1: 2, score2: 0, winner: 'REAL MADRID', year: '2023-24', matchType: 'champion' }
      ],

      // Positioning constants
      angleTiltAmountForRound16ToQuarter: 60,
      angleTiltAmountForQuarterToSemi: 130,
      championNodeSize: {w: 280, h: 200},
      tournamentNodeSize: {w: 180, h: 100},

      // Snap settings
      snapSettings: { constraints: SnapConstraints.None },
      scrollSettings: { canAutoScroll: false, scrollLimit: "Infinity" },
      tool: DiagramTools.ZoomPan
    };
  },
  
  computed: {
    // Calculate X positions
    offsetXIncreaseAmount() { return 280; },
    leftRound16NodesOffsetX() { return this.offsetXIncreaseAmount; },
    leftQuarterFinalNodesOffsetX() { return this.leftRound16NodesOffsetX + this.offsetXIncreaseAmount; },
    leftSemiFinalNodesOffsetX() { return this.leftQuarterFinalNodesOffsetX + this.offsetXIncreaseAmount; },
    finalNodeOffsetX() { return this.leftSemiFinalNodesOffsetX + this.offsetXIncreaseAmount; },
    rightSemiFinalNodesOffsetX() { return this.finalNodeOffsetX + this.offsetXIncreaseAmount; },
    rightQuarterFinalNodesOffsetX() { return this.rightSemiFinalNodesOffsetX + this.offsetXIncreaseAmount; },
    rightRound16NodesOffsetX() { return this.rightQuarterFinalNodesOffsetX + this.offsetXIncreaseAmount; },

    // Calculate Y positions
    offsetYIncreaseAmount() { return 190; },
    round16TopOffsetY() { return this.offsetYIncreaseAmount; },
    round16UpperMiddleOffsetY() { return this.round16TopOffsetY + this.offsetYIncreaseAmount; },
    round16LowerMiddleOffsetY() { return this.round16UpperMiddleOffsetY + this.offsetYIncreaseAmount; },
    round16BottomOffsetY() { return this.round16LowerMiddleOffsetY + this.offsetYIncreaseAmount; },
    quarterFinalTopOffsetY() { return (this.round16TopOffsetY + this.round16UpperMiddleOffsetY) / 2; },
    quarterFinalBottomOffsetY() { return (this.round16LowerMiddleOffsetY + this.round16BottomOffsetY) / 2; },
    semiFinalOffsetY() { return (this.quarterFinalTopOffsetY + this.quarterFinalBottomOffsetY) / 2; },
    finalNodeOffsetY() { return this.semiFinalOffsetY; },
    championNodeOffsetY() { return this.finalNodeOffsetY - 350; }
  },

  methods: {
    // Find tournament data by ID with fallback
    findData(id) {
      const found = this.tournamentData.find(item => item.id === id);
      if (found) return found;
      
      return { 
        id: id, team1: 'TBD', team2: 'TBD', score1: '', score2: '', winner: '', 
        matchType: id.includes('round16') ? 'round16' : 
                   id.includes('quarter') ? 'quarterfinal' : 
                   id.includes('semi') ? 'semifinal' : 
                   id.includes('final') ? 'final' : 'round16'
      };
    },

    // Create detailed tooltip content for match information
    createTooltipContent(data) {
      const tooltipDiv = document.createElement('div');
      tooltipDiv.classList.add('football-results-tooltip-content');
      
      // Apply UEFA themed styling to tooltip
      tooltipDiv.style.cssText = 
        'background: linear-gradient(135deg, #001122 0%, #003366 100%);' +
        'border-radius: 12px; padding: 16px; color: white;' +
        'font-family: "Verdana", sans-serif; min-width: 300px; max-width: 380px;' +
        'box-shadow: 0 10px 30px rgba(0,0,0,0.5); position: relative; z-index: 1000;';
      
      // Format match type display text
      const matchTypeDisplay = data.matchType === 'round16' ? 'ROUND OF 16' : 
                               data.matchType === 'quarterfinal' ? 'QUARTER-FINAL' :
                               data.matchType === 'semifinal' ? 'SEMI-FINAL' :
                               data.matchType === 'final' ? 'FINAL' :
                               data.matchType === 'champion' ? 'CHAMPION' : data.matchType.toUpperCase();
      
      // Check for penalty shootout data
      const hasShootout = data.shootoutTeam1 && data.shootoutTeam2;
      const shootoutDisplay = hasShootout ? 
        '<div style="font-size: 11px; color: #87CEEB; margin-top: 8px; text-align: center;">' +
          '<span style="color: #FFD700;">Penalty Shootout:</span> ' + data.shootoutTeam1 + ' - ' + data.shootoutTeam2 +
        '</div>' : '';
      
      // Apply winner styling
      const team1WinnerStyle = data.winner === data.team1 ? 'color: #FFD700; font-weight: bold;' : '';
      const team2WinnerStyle = data.winner === data.team2 ? 'color: #FFD700; font-weight: bold;' : '';
      
      // Build tooltip HTML content
      tooltipDiv.innerHTML = 
        '<div style="text-align: center;">' +
          '<div style="font-size: 11px; font-weight: bold; color: #FFD700; margin-bottom: 6px; letter-spacing: 1px;">UEFA CHAMPIONS LEAGUE</div>' +
          '<div style="font-size: 10px; color: #87CEEB; margin-bottom: 12px; font-weight: 600;">' + matchTypeDisplay + '</div>' +
          '<div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 12px; margin-bottom: 10px;">' +
            '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">' +
              '<div style="flex: 1; text-align: left;"><div style="font-size: 14px; font-weight: bold; ' + team1WinnerStyle + '">' + data.team1 + '</div></div>' +
              '<div style="font-size: 20px; font-weight: bold; color: #fff; margin: 0 15px;">' + data.score1 + '</div>' +
            '</div>' +
            '<div style="text-align: center; margin: 8px 0;">' +
              '<div style="height: 1px; background: linear-gradient(90deg, transparent, #FFD700, transparent);"></div>' +
              '<div style="font-size: 10px; color: #87CEEB; margin: 4px 0;">VS</div>' +
              '<div style="height: 1px; background: linear-gradient(90deg, transparent, #FFD700, transparent);"></div>' +
            '</div>' +
            '<div style="display: flex; justify-content: space-between; align-items: center;">' +
              '<div style="flex: 1; text-align: left;"><div style="font-size: 14px; font-weight: bold; ' + team2WinnerStyle + '">' + data.team2 + '</div></div>' +
              '<div style="font-size: 20px; font-weight: bold; color: #fff; margin: 0 15px;">' + data.score2 + '</div>' +
            '</div>' +
            shootoutDisplay +
          '</div>' +
          '<div style="background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); color: #001122; padding: 8px 12px; border-radius: 6px; font-weight: bold; font-size: 12px;">' +
            'WINNER: ' + data.winner +
          '</div>' +
        '</div>';
      
      return tooltipDiv;
    },

    // Generate HTML template for tournament nodes
    getNodeTemplate(data) {
      // Handle champion node template
      if (data.matchType === 'champion') {
        return '<div class="tournament-node champion-node" data-id="' + data.id + '">' +
                  '<div class="champion-container">' +
                    '<div class="champion-badge"><div class="champion-trophy">🏆</div></div>' +
                    '<div class="champion-title">CHAMPION</div>' +
                    '<div class="champion-info" style="opacity: 0;">' +
                      '<div class="champion-team">' + (data.winner || 'TBD') + '</div>' +
                      '<div class="champion-year">' + (data.year || '2024') + '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>';
      }
      
      // Determine winner classes for styling
      const team1Class = data.winner === data.team1 ? 'winner' : '';
      const team2Class = data.winner === data.team2 ? 'winner' : '';
      
      // Get round display name
      const roundDisplayName = data.matchType === 'round16' ? 'ROUND OF 16' : 
                            data.matchType === 'quarterfinal' ? 'QUARTER-FINAL' :
                            data.matchType === 'semifinal' ? 'SEMI-FINAL' :
                            data.matchType === 'final' ? 'FINAL' : 'MATCH';
      
      // Return match node template with flip card structure
      return '<div class="tournament-node ' + data.matchType + '-node" data-id="' + data.id + '">' +
                '<div class="flip-card">' +
                  '<div class="flip-card-inner">' +
                    '<div class="flip-card-front">' +
                      '<div style="height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 51, 102, 0.9) 0%, rgba(0, 68, 136, 0.9) 100%);">' +
                        '<div style="text-align: center; color: #cbe5feff; font-weight: 600; font-size: 16px; letter-spacing: 2px; text-shadow: 0 2px 4px rgba(0, 14, 87, 0.7);">' + roundDisplayName + '</div>' +
                      '</div>' +
                    '</div>' +
                    '<div class="flip-card-back">' +
                      '<div class="team-section team-top ' + team1Class + '">' +
                        '<span class="team-name">' + (data.team1 || 'TBD') + '</span>' +
                        '<span class="team-score score-right">' + (data.score1 !== undefined ? data.score1 : '') + '</span>' +
                      '</div>' +
                      '<div class="team-section team-bottom ' + team2Class + '">' +
                        '<span class="team-name">' + (data.team2 || 'TBD') + '</span>' +
                        '<span class="team-score score-right">' + (data.score2 !== undefined ? data.score2 : '') + '</span>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },

    // Initialize diagram nodes and connectors
    initializeDiagram() {
      // Define all tournament nodes with positions and properties
      this.nodes = [
        // Champion node (top center)
        { 
          id: 'champion', 
          offsetX: this.finalNodeOffsetX, 
          offsetY: this.championNodeOffsetY, 
          width: this.championNodeSize.w, 
          height: this.championNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('champion')) }
        },
        
        // Final node (center)
        { 
          id: 'final', 
          offsetX: this.finalNodeOffsetX, 
          offsetY: this.finalNodeOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('final')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('final')), position: 'TopCenter', relativeMode: 'Object' }
        },
        
        // Semifinal nodes
        { 
          id: 'semi1', 
          offsetX: this.leftSemiFinalNodesOffsetX, 
          offsetY: this.semiFinalOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('semi1')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('semi1')), position: 'TopCenter', relativeMode: 'Object' }
        },
        { 
          id: 'semi2', 
          offsetX: this.rightSemiFinalNodesOffsetX, 
          offsetY: this.semiFinalOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('semi2')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('semi2')), position: 'TopCenter', relativeMode: 'Object' }
        },
        
        // Quarterfinal nodes (left side)
        { 
          id: 'quarter1', 
          offsetX: this.leftQuarterFinalNodesOffsetX, 
          offsetY: this.quarterFinalTopOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('quarter1')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('quarter1')), position: 'RightCenter', relativeMode: 'Object' }
        },
        { 
          id: 'quarter2', 
          offsetX: this.leftQuarterFinalNodesOffsetX, 
          offsetY: this.quarterFinalBottomOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('quarter2')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('quarter2')), position: 'RightCenter', relativeMode: 'Object' }
        },
        // (right side)
        { 
          id: 'quarter3', 
          offsetX: this.rightQuarterFinalNodesOffsetX, 
          offsetY: this.quarterFinalTopOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('quarter3')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('quarter3')), position: 'LeftCenter', relativeMode: 'Object' }
        },
        { 
          id: 'quarter4', 
          offsetX: this.rightQuarterFinalNodesOffsetX, 
          offsetY: this.quarterFinalBottomOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('quarter4')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('quarter4')), position: 'LeftCenter', relativeMode: 'Object' }
        },
        
        // Round of 16 nodes (left side)
        { 
          id: 'round16_1', 
          offsetX: this.leftRound16NodesOffsetX, 
          offsetY: this.round16TopOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('round16_1')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('round16_1')), position: 'RightCenter', relativeMode: 'Object' }
        },
        { 
          id: 'round16_2', 
          offsetX: this.leftRound16NodesOffsetX, 
          offsetY: this.round16UpperMiddleOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('round16_2')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('round16_2')), position: 'RightCenter', relativeMode: 'Object' }
        },
        { 
          id: 'round16_3', 
          offsetX: this.leftRound16NodesOffsetX, 
          offsetY: this.round16LowerMiddleOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('round16_3')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('round16_3')), position: 'RightCenter', relativeMode: 'Object' }
        },
        { 
          id: 'round16_4', 
          offsetX: this.leftRound16NodesOffsetX, 
          offsetY: this.round16BottomOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('round16_4')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('round16_4')), position: 'RightCenter', relativeMode: 'Object' }
        },
        
        // Round of 16 nodes (right side)
        { 
          id: 'round16_5', 
          offsetX: this.rightRound16NodesOffsetX, 
          offsetY: this.round16TopOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('round16_5')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('round16_5')), position: 'LeftCenter', relativeMode: 'Object' }
        },
        { 
          id: 'round16_6', 
          offsetX: this.rightRound16NodesOffsetX, 
          offsetY: this.round16UpperMiddleOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('round16_6')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('round16_6')), position: 'LeftCenter', relativeMode: 'Object' }
        },
        { 
          id: 'round16_7', 
          offsetX: this.rightRound16NodesOffsetX, 
          offsetY: this.round16LowerMiddleOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('round16_7')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('round16_7')), position: 'LeftCenter', relativeMode: 'Object' }
        },
        { 
          id: 'round16_8', 
          offsetX: this.rightRound16NodesOffsetX, 
          offsetY: this.round16BottomOffsetY, 
          width: this.tournamentNodeSize.w, 
          height: this.tournamentNodeSize.h, 
          shape: { type: 'HTML', content: this.getNodeTemplate(this.findData('round16_8')) },
          constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
          tooltip: { content: this.createTooltipContent(this.findData('round16_8')), position: 'LeftCenter', relativeMode: 'Object' }
        }
      ];

      // Define all connectors linking tournament progression
      this.connectors = [
        // Champion connection
        { id: 'champ1', sourceID: 'final', targetID: 'champion'},
        
        // Final connections
        { id: 'final1', sourceID: 'semi1', targetID: 'final'},
        { id: 'final2', sourceID: 'semi2', targetID: 'final'},
        
        // Semifinal connections
        { id: 'semi1_1', segments: [{ point: { x: this.leftSemiFinalNodesOffsetX - this.angleTiltAmountForQuarterToSemi, y: this.quarterFinalTopOffsetY }}], sourceID: 'quarter1', targetID: 'semi1'},
        { id: 'semi1_2', segments: [{ point: { x: this.leftSemiFinalNodesOffsetX - this.angleTiltAmountForQuarterToSemi, y: this.quarterFinalBottomOffsetY }}], sourceID: 'quarter2', targetID: 'semi1'},
        { id: 'semi2_1', segments: [{ point: { x: this.rightSemiFinalNodesOffsetX + this.angleTiltAmountForQuarterToSemi, y: this.quarterFinalTopOffsetY }}], sourceID: 'quarter3', targetID: 'semi2'},
        { id: 'semi2_2', segments: [{ point: { x: this.rightSemiFinalNodesOffsetX + this.angleTiltAmountForQuarterToSemi, y: this.quarterFinalBottomOffsetY }}], sourceID: 'quarter4', targetID: 'semi2'},
        
        // Quarterfinal connections
        { id: 'quarter1_1', segments: [{ point: { x: this.leftQuarterFinalNodesOffsetX - this.angleTiltAmountForRound16ToQuarter, y: this.round16TopOffsetY }}], sourceID: 'round16_1', targetID: 'quarter1'},
        { id: 'quarter1_2', segments: [{ point: { x: this.leftQuarterFinalNodesOffsetX - this.angleTiltAmountForRound16ToQuarter, y: this.round16UpperMiddleOffsetY }}], sourceID: 'round16_2', targetID: 'quarter1'},
        { id: 'quarter2_1', segments: [{ point: { x: this.leftQuarterFinalNodesOffsetX - this.angleTiltAmountForRound16ToQuarter, y: this.round16LowerMiddleOffsetY }}], sourceID: 'round16_3', targetID: 'quarter2'},
        { id: 'quarter2_2', segments: [{ point: { x: this.leftQuarterFinalNodesOffsetX - this.angleTiltAmountForRound16ToQuarter, y: this.round16BottomOffsetY }}], sourceID: 'round16_4', targetID: 'quarter2'},

        { id: 'quarter3_1', segments: [{ point: { x: this.rightQuarterFinalNodesOffsetX + this.angleTiltAmountForRound16ToQuarter, y: this.round16TopOffsetY }}], sourceID: 'round16_5', targetID: 'quarter3'},
        { id: 'quarter3_2', segments: [{ point: { x: this.rightQuarterFinalNodesOffsetX + this.angleTiltAmountForRound16ToQuarter, y: this.round16UpperMiddleOffsetY }}], sourceID: 'round16_6', targetID: 'quarter3'},
        { id: 'quarter4_1', segments: [{ point: { x: this.rightQuarterFinalNodesOffsetX + this.angleTiltAmountForRound16ToQuarter, y: this.round16LowerMiddleOffsetY }}], sourceID: 'round16_7', targetID: 'quarter4'},
        { id: 'quarter4_2', segments: [{ point: { x: this.rightQuarterFinalNodesOffsetX + this.angleTiltAmountForRound16ToQuarter, y: this.round16BottomOffsetY }}], sourceID: 'round16_8', targetID: 'quarter4' }
      ];

      // Apply initial disabled styling to all connectors
      this.connectors.forEach(connector => {
        connector.style = { strokeColor: 'rgba(0, 102, 204, 0.2)', strokeWidth: 2};
        connector.targetDecorator = { shape: 'None' };
        connector.sourceDecorator = { shape: 'None' };
      });

      // Apply transparent styling to all nodes
      this.nodes.forEach(node => {
        node.style = { fill: 'transparent', strokeColor: 'transparent' };
      });
    },

    // Connector default settings
    getConnectorDefaults(connector) {
      connector.type = 'Straight';
      connector.sourcePadding = 10;
      connector.targetPadding = 10;
      return connector;
    },

    // Load event handler
    load() {
      setTimeout(() => {
        const diagram = this.$refs.diagramObj.ej2Instances;
        diagram.fitToPage({
          canZoomIn: true,
          margin: { left: 0, right: 20, top: 0, bottom: 90 }
        });
      });
    },
  },

  mounted() {
    // Initialize diagram with loading delay
    setTimeout(() => {
      this.showLoading = false;
      this.initializeDiagram();
      // calling fit to page initially
      this.$nextTick(() => {
        const diagram = this.$refs.diagramObj.ej2Instances;
        if (diagram && this.nodes.length > 0) {
          diagram.fitToPage({
            canZoomIn: true,
            margin: { left: 0, right: 20, top: 0, bottom: 90 },
          });
        }
      });
    }, 700);
  }
}
</script>