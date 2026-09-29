<template>
  <div class="col-lg-12 control-section diagram-seat-booking">
    <div style="width:100%">
    <header class="header">
      <h2>
        <div>
          <span class="movie-name">
            <p class="movie-name-lnk">F1: The Movie</p>
          </span>
        </div>
        <div>
          <span class="movie-timing" id="movie-timing"></span>
          <span class="theater-name"> | </span>
          <span class="theater-name">Velvet Aurora Cinematheque</span>
        </div>
      </h2>
    </header>
    <!-- Show Timing row -->
    <div class="show-timing-section">
      <div class="date-row">
        <ul class="timing-list">
          <li class="timing-item" style="pointer-events: none">
            <span class="date-label" id="date-label" v-html="dateLabelText"></span>
          </li>
          <li v-for="timing in showTimings" :key="timing.id" :class="[
            'timing-item',
            timing.status,
            { selected: timing.id === selectedTimingId },
          ]" @click="onTimingClick(timing)">
            <div class="time">{{ timing.time }}</div>
            <div class="screen-type">{{ timing.type }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="notificationMessage" class="notification">
      {{ notificationMessage }}
    </div>
    <div id="wrapper-diagram" style="width: 100%">
      <ejs-diagram style="display: block" ref="diagramObject" id="diagram" :width="width" :height="height"
        :nodes="nodes" :constraints="constraints" :snapSettings="snapSettings" :tool="tool" :load="onDiagramLoad" :created="onDiagramCreated"
        @click="onDiagramClick"></ejs-diagram>
    </div>
    <!-- Booking Summary -->
    <div class="booking-summary-container">
      <div class="seat-legend">
        <div class="legend-items">
          <div class="legend-item">
            <div class="legend-seat available"></div>
            <span class="legend-text">Available</span>
          </div>
          <div class="legend-item">
            <div class="legend-seat selected"></div>
            <span class="legend-text">Selected</span>
          </div>
          <div class="legend-item">
            <div class="legend-seat booked"></div>
            <span class="legend-text">Booked</span>
          </div>
        </div>
      </div>
      <div class="booking-section">
        <div class="price-info">
          <div class="price">${{ totalAmount }}</div>
          <div class="ticket-count">
            {{ seatSelection.TicketCount }} Tickets Selected
          </div>
        </div>
        <div class="price-hint-inline" v-if="seatSelection.TicketCount > 0">
          <span>Tickets: ${{ seatSelection.Amount }}</span>
          <span>+ Fees: $6</span>
        </div>
        <button class="btn-proceed" :disabled="seatSelection.TicketCount === 0" @click="onProceedToBook">
          Proceed
        </button>
      </div>
    </div>
    <!-- Booking Dialog -->
    <ejs-dialog id="bookingSuccessDialog" ref="bookingDialog" :visible="false" :showCloseIcon="false" :isModal="true"
      :width="'435px'" :cssClass="''" :content="dialogContent" :target="'.control-section'" :buttons="dialogButtons">
    </ejs-dialog>
    </div>
    <div id="action-description">
      <p>
        This sample implements a functional movie ticket booking interface using the Syncfusion<sup>®</sup> EJ2 Vue Diagram component, providing an intuitive visual representation of a cinema hall's seating arrangement with real-time price updates and a complete booking workflow.
      </p>
    </div>
    <div id="description">
      <p>
        This interactive cinema seat booking experience begins with users selecting a showtime, which dynamically updates the seating layout to reflect real-time availability. Users can highlight and select seats (up to 10 within a single tier), while the booking summary panel instantly updates prices and fees. Tooltip provide seat details, and a "Proceed" button leads to a confirmation screen with a unique booking ID.
      </p>
    </div>
  </div>
</template>
<style>
.diagram-seat-booking .header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 24px;
  padding-top: 0px;
  border-bottom: 1px solid #e0e0e0;
}

.diagram-seat-booking .header h2 {
  margin: 0;
  font-weight: normal;
}

.diagram-seat-booking .movie-name-lnk {
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  transition: color 0.2s ease;
  color: #337ab7 !important;
}

.diagram-seat-booking .theater-info {
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 14px;
  font-weight: 400;
}

.diagram-seat-booking .separator {
  margin: 0 8px;
  color: #999999;
}

.diagram-seat-booking .show-timing-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: space-around;
  border-bottom: 1px solid #e5e7eb;
}

.diagram-seat-booking .date-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.diagram-seat-booking .date-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #666666;
  text-align: center;
  line-height: 1.3;
  min-width: 60px;
  padding-right: 2.5rem;
  border-right: 1px solid #9CA3AF;
}

.diagram-seat-booking .timing-list {
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.diagram-seat-booking .timing-item {
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  min-width: 120px;
  border: 1px solid transparent;
  margin: 10px;
  border-radius: 3px;
}

.diagram-seat-booking .timing-item .time {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.diagram-seat-booking .timing-item .screen-type {
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Available timings */
.diagram-seat-booking .timing-item.available {
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid #9ca3af;
  color: #15803d;
}

.diagram-seat-booking .timing-item.available:hover {
  background-color: #dcfce7;
  border-radius: 8px;
  border: 1px solid #15803d;
  color: #15803d;
}

/* Filling fast timings */
.diagram-seat-booking .timing-item.filling-fast {
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid #9ca3af;
  color: #c2410c;
}

.diagram-seat-booking .timing-item.filling-fast:hover {
  background-color: #ffedd5;
  border-radius: 8px;
  border: 1px solid #c2410c;
  color: #c2410c;
}

/* Selected timing */
.diagram-seat-booking .timing-item.selected {
  background-color: #4f46e5;
  border: 1px solid #4f46e5;
  border-radius: 8px;
  color: white;
}

/* Sold out timings */
.diagram-seat-booking .timing-item.sold-out {
  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  color: #9ca3af;
  cursor: not-allowed;
  opacity: 0.7;
}

.diagram-seat-booking .timing-item.sold-out:hover {
  border: 1px solid #d1d5db;
  color: #6c757d;
  background-color: #ffffff;
}

.diagram-seat-booking .main-container {
  min-height: calc(100vh - 100px);
  gap: 0;
}

.diagram-seat-booking .ticket-selection-section {
  background-color: #f8f9fa;
  margin-top: 2px;
  min-height: 500px;
}

.diagram-seat-booking .booking-summary-container {
  box-sizing: border-box;
  width: 100%;
  height: 154px;
  left: 0px;
  top: 1357px;
  background: rgba(255, 255, 255, 0.0001);
  border-top: 1px solid #e5e7eb;
  margin-top: 20px;
}

.diagram-seat-booking .booking-summary-section {
  position: relative;
  background: #fff;
  background-color: #ffffff;
  background-repeat: no-repeat;
  border: none;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  margin-top: 2px;
  padding: 0px;
  height: 500px;
}

.diagram-seat-booking .booking-summary-section .header {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  font-size: 25px;
  color: #d9534f;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0;
  background: none;
  padding: 12px 16px;
  display: block;
  text-align: left;
  flex-shrink: 0;
}

.diagram-seat-booking .booking-content {
  padding: 30px 30px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Add these helper classes for better control */
.diagram-seat-booking .left {
  flex: 1;
  text-align: left;
}

.diagram-seat-booking .right {
  text-align: right;
  white-space: nowrap;
}

.diagram-seat-booking .subtext {
  font-size: 16px;
  color: #777;
  margin-left: 10px;
}

.diagram-seat-booking .bold {
  font-weight: bold;
}

.diagram-seat-booking .divider {
  border-top: 1px solid #eee;
  margin: 8px 0;
}

.diagram-seat-booking .footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 75px;
  background: #fff3cd;
  border-radius: 0 0 10px 10px;
  padding: 12px 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}

.diagram-seat-booking .__circle-left,
.diagram-seat-booking .__circle-right {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #f2f2f2;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.diagram-seat-booking .__circle-left {
  left: -10px;
  border: 1px solid #f2f2f2;
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
}

.diagram-seat-booking .__circle-right {
  right: -10px;
  border: 1px solid #f2f2f2;
  border-right: none;
}

.diagram-seat-booking .action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  padding: 0 10px;
  height: auto;
}

.diagram-seat-booking .btn {
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  height: 50px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.diagram-seat-booking .btn-proceed {
  background-color: rgb(103, 85, 238);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 30%;
  transition: background-color 0.3s;
}

.diagram-seat-booking .btn-proceed:hover {
  transform: translateY(-1px);
  background-color: #5a4fcf;
}

.diagram-seat-booking .btn-clear {
  background-color: #f8f9fa;
  color: #666;
  border: 1px solid #e9ecef;
}

.diagram-seat-booking .btn-clear:hover {
  background-color: #e9ecef;
  color: #333;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.diagram-seat-booking .btn:disabled,
.diagram-seat-booking .btn-proceed:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
  background-color: #e3e3e3 !important;
  color: gray;
}

.diagram-seat-booking .seat-legend {
  padding: 20px;
}

.diagram-seat-booking .legend-items {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.diagram-seat-booking .legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.diagram-seat-booking .legend-seat {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  position: relative;
}

.diagram-seat-booking .legend-seat.available {
  background-color: transparent;
  border: 2px solid #9ca3af;
  color: #9ca3af;
}

.diagram-seat-booking .legend-seat.selected {
  background-color: #15803d;
  border: 2px solid #15803d;
  color: #15803d;
}

.diagram-seat-booking .legend-seat.booked {
  background-color: #e5e7eb;
  border: 2px solid #e5e7eb;
  color: #e5e7eb;
}

.diagram-seat-booking .legend-text {
  font-size: 14px;
  font-weight: 500;
}

/* Success Modal Styles */
.diagram-seat-booking .success-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.diagram-seat-booking .success-icon {
  font-size: 60px;
  color: #28a745;
  margin-bottom: 20px;
}

.diagram-seat-booking .success-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.diagram-seat-booking .success-message {
  margin-bottom: 20px;
  line-height: 1.5;
  text-wrap-mode: wrap;
}

.diagram-seat-booking .booking-details {
  padding: 15px;
  border-radius: 5px;
  text-align: left;
}

.diagram-seat-booking .booking-details h4 {
  margin-bottom: 10px;
}

.diagram-seat-booking .booking-details p {
  margin: 5px 0;
  font-size: 14px;
}

/* Auto-hide notification */
.diagram-seat-booking .notification {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #d9534f;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  z-index: 1000;
  animation: slideInMaxSeatError 0.3s ease-out;
}

@keyframes slideInMaxSeatError {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.diagram-seat-booking .booking-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.diagram-seat-booking .price-info {
  display: flex;
  flex-direction: column;
  margin-left: 30%;
}

.diagram-seat-booking .price {
  font-size: 24px;
  font-weight: bold;
}

.diagram-seat-booking .ticket-count {
  font-size: 14px;
  margin-top: 5px;
}

.diagram-seat-booking .btn2 {
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.diagram-seat-booking .btn2-proceed {
  color: white;
}

.diagram-seat-booking .price-hint-inline {
  font-size: 12px;
  color: #888;
  margin: 4px 0 0 0;
  display: flex;
  gap: 12px;
}

.diagram-seat-booking .theater-name,
.diagram-seat-booking .movie-timing {
  font-size: 14px !important;
}

/* Mobile responsive styles */
@media screen and (max-width: 768px) {
  .diagram-seat-booking .main-container {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto auto !important;
  }

  .diagram-seat-booking .ticket-selection-section {
    grid-row: 1 !important;
    margin: 10px !important;
    padding: 15px !important;
  }

  .diagram-seat-booking .booking-summary-container {
    grid-row: 2 !important;
    padding: 0px 10px 20px 10px !important;
  }

  .diagram-seat-booking .booking-summary-section {
    height: auto !important;
    min-height: 400px !important;
  }

  .diagram-seat-booking .header {
    padding: 15px 10px !important;
  }

  .diagram-seat-booking .header h2 {
    font-size: 18px !important;
  }

  .diagram-seat-booking .movie-name-lnk {
    font-size: 20px !important;
  }

  .diagram-seat-booking .theater-name,
  .diagram-seat-booking .movie-timing {
    font-size: 12px !important;
  }
}
</style>
<script>
import { SnapConstraints, DiagramTools, Node, NodeModel, DiagramComponent, NodeConstraints, DiagramConstraints } from '@syncfusion/ej2-vue-diagrams';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';

let diagramInstance;

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-dialog': DialogComponent,
  },
  data: function () {
    // Raw data from original sample for booking
    const timingSpecificBookedSeats = {
      // 11:50 AM (Morning show - 45% booked = 117 seats booked, 143 available)
      1: [
        // Executive tier - Only best center seats (35 seats)
        'seatD9',
        'seatD10',
        'seatE9',
        'seatE10',
        'seatF8',
        'seatF9',
        'seatF10',
        'seatF11',
        'seatG7',
        'seatG8',
        'seatG9',
        'seatG10',
        'seatH6',
        'seatH7',
        'seatH8',
        'seatC9',
        'seatC10',
        'seatB9',
        'seatB10',
        'seatA9',
        'seatA10',
        'seatD8',
        'seatD11',
        'seatE8',
        'seatE11',
        'seatF7',
        'seatF12',
        'seatC8',
        'seatC11',
        'seatB8',
        'seatB11',
        'seatA8',
        'seatA11',
        'seatG6',
        'seatG11',
        'seatH5',
        'seatH9',

        // Corporate tier - Center seats only (25 seats)
        'seatI8',
        'seatI9',
        'seatJ8',
        'seatJ9',
        'seatK7',
        'seatK8',
        'seatK9',
        'seatK10',
        'seatL6',
        'seatL7',
        'seatL8',
        'seatL9',
        'seatM5',
        'seatM6',
        'seatM7',
        'seatM8',
        'seatI7',
        'seatI10',
        'seatJ7',
        'seatJ10',
        'seatK6',
        'seatK11',
        'seatL5',
        'seatL10',
        'seatM4',

        // Budget tier - Few center seats (15 seats)
        'seatN8',
        'seatN9',
        'seatO8',
        'seatO9',
        'seatP8',
        'seatP9',
        'seatN7',
        'seatN10',
        'seatO7',
        'seatO10',
        'seatP7',
        'seatP10',
        'seatN6',
        'seatO6',
        'seatP6',
      ],

      // 02:15 PM (Afternoon show - 100% booked = 260 seats booked, 0 available)
      2: [
        // Executive tier - All seats booked (138 seats)
        'seatA1',
        'seatA2',
        'seatA3',
        'seatA4',
        'seatA5',
        'seatA6',
        'seatA7',
        'seatA8',
        'seatA9',
        'seatA10',
        'seatA11',
        'seatA12',
        'seatA13',
        'seatA14',
        'seatA15',
        'seatA16',
        'seatA17',
        'seatA18',
        'seatB1',
        'seatB2',
        'seatB3',
        'seatB4',
        'seatB5',
        'seatB6',
        'seatB7',
        'seatB8',
        'seatB9',
        'seatB10',
        'seatB11',
        'seatB12',
        'seatB13',
        'seatB14',
        'seatB15',
        'seatB16',
        'seatB17',
        'seatB18',
        'seatC1',
        'seatC2',
        'seatC3',
        'seatC4',
        'seatC5',
        'seatC6',
        'seatC7',
        'seatC8',
        'seatC9',
        'seatC10',
        'seatC11',
        'seatC12',
        'seatC13',
        'seatC14',
        'seatC15',
        'seatC16',
        'seatC17',
        'seatC18',
        'seatD1',
        'seatD2',
        'seatD3',
        'seatD4',
        'seatD5',
        'seatD6',
        'seatD7',
        'seatD8',
        'seatD9',
        'seatD10',
        'seatD11',
        'seatD12',
        'seatD13',
        'seatD14',
        'seatD15',
        'seatD16',
        'seatD17',
        'seatD18',
        'seatE1',
        'seatE2',
        'seatE3',
        'seatE4',
        'seatE5',
        'seatE6',
        'seatE7',
        'seatE8',
        'seatE9',
        'seatE10',
        'seatE11',
        'seatE12',
        'seatE13',
        'seatE14',
        'seatE15',
        'seatE16',
        'seatE17',
        'seatE18',
        'seatF1',
        'seatF2',
        'seatF3',
        'seatF4',
        'seatF5',
        'seatF6',
        'seatF7',
        'seatF8',
        'seatF9',
        'seatF10',
        'seatF11',
        'seatF12',
        'seatF13',
        'seatF14',
        'seatF15',
        'seatF16',
        'seatF17',
        'seatF18',
        'seatG1',
        'seatG2',
        'seatG3',
        'seatG4',
        'seatG5',
        'seatG6',
        'seatG7',
        'seatG8',
        'seatG9',
        'seatG10',
        'seatG11',
        'seatG12',
        'seatG13',
        'seatG14',
        'seatG15',
        'seatG16',
        'seatH1',
        'seatH2',
        'seatH3',
        'seatH4',
        'seatH5',
        'seatH6',
        'seatH7',
        'seatH8',
        'seatH9',
        'seatH10',
        'seatH11',
        'seatH12',
        'seatH13',
        'seatH14',

        // Corporate tier - All seats booked (74 seats)
        'seatI1',
        'seatI2',
        'seatI3',
        'seatI4',
        'seatI5',
        'seatI6',
        'seatI7',
        'seatI8',
        'seatI9',
        'seatI10',
        'seatI11',
        'seatI12',
        'seatI13',
        'seatI14',
        'seatI15',
        'seatI16',
        'seatJ1',
        'seatJ2',
        'seatJ3',
        'seatJ4',
        'seatJ5',
        'seatJ6',
        'seatJ7',
        'seatJ8',
        'seatJ9',
        'seatJ10',
        'seatJ11',
        'seatJ12',
        'seatJ13',
        'seatJ14',
        'seatJ15',
        'seatJ16',
        'seatK1',
        'seatK2',
        'seatK3',
        'seatK4',
        'seatK5',
        'seatK6',
        'seatK7',
        'seatK8',
        'seatK9',
        'seatK10',
        'seatK11',
        'seatK12',
        'seatK13',
        'seatK14',
        'seatK15',
        'seatK16',
        'seatL1',
        'seatL2',
        'seatL3',
        'seatL4',
        'seatL5',
        'seatL6',
        'seatL7',
        'seatL8',
        'seatL9',
        'seatL10',
        'seatL11',
        'seatL12',
        'seatL13',
        'seatL14',
        'seatM1',
        'seatM2',
        'seatM3',
        'seatM4',
        'seatM5',
        'seatM6',
        'seatM7',
        'seatM8',
        'seatM9',
        'seatM10',
        'seatM11',
        'seatM12',

        // Budget tier - All seats booked (48 seats)
        'seatN1',
        'seatN2',
        'seatN3',
        'seatN4',
        'seatN5',
        'seatN6',
        'seatN7',
        'seatN8',
        'seatN9',
        'seatN10',
        'seatN11',
        'seatN12',
        'seatN13',
        'seatN14',
        'seatN15',
        'seatN16',
        'seatO1',
        'seatO2',
        'seatO3',
        'seatO4',
        'seatO5',
        'seatO6',
        'seatO7',
        'seatO8',
        'seatO9',
        'seatO10',
        'seatO11',
        'seatO12',
        'seatO13',
        'seatO14',
        'seatO15',
        'seatO16',
        'seatP1',
        'seatP2',
        'seatP3',
        'seatP4',
        'seatP5',
        'seatP6',
        'seatP7',
        'seatP8',
        'seatP9',
        'seatP10',
        'seatP11',
        'seatP12',
        'seatP13',
        'seatP14',
        'seatP15',
        'seatP16',
      ],

      // 06:20 PM (Prime time - 85% booked = 221 seats booked, 39 available)
      3: [
        // Executive tier - Heavy booking (117 seats booked, 21 available)
        'seatA1',
        'seatA2',
        'seatA3',
        'seatA4',
        'seatA5',
        'seatA6',
        'seatA7',
        'seatA8',
        'seatA9',
        'seatA10',
        'seatA11',
        'seatA12',
        'seatA13',
        'seatA14',
        'seatA15',
        'seatA16',
        'seatA17',
        'seatA18',
        'seatB1',
        'seatB2',
        'seatB3',
        'seatB4',
        'seatB5',
        'seatB6',
        'seatB7',
        'seatB8',
        'seatB9',
        'seatB10',
        'seatB11',
        'seatB12',
        'seatB13',
        'seatB14',
        'seatB15',
        'seatB16',
        'seatB17',
        'seatB18',
        'seatC1',
        'seatC2',
        'seatC3',
        'seatC4',
        'seatC5',
        'seatC6',
        'seatC7',
        'seatC8',
        'seatC9',
        'seatC10',
        'seatC11',
        'seatC12',
        'seatC13',
        'seatC14',
        'seatC15',
        'seatC16',
        'seatC17',
        'seatC18',
        'seatD1',
        'seatD2',
        'seatD3',
        'seatD4',
        'seatD5',
        'seatD6',
        'seatD7',
        'seatD8',
        'seatD9',
        'seatD10',
        'seatD11',
        'seatD12',
        'seatD13',
        'seatD14',
        'seatD15',
        'seatD16',
        'seatD17',
        'seatD18',
        'seatE1',
        'seatE2',
        'seatE3',
        'seatE4',
        'seatE5',
        'seatE6',
        'seatE7',
        'seatE8',
        'seatE9',
        'seatE10',
        'seatE11',
        'seatE12',
        'seatE13',
        'seatE14',
        'seatE15',
        'seatE16',
        'seatE17',
        'seatE18',
        'seatF1',
        'seatF2',
        'seatF3',
        'seatF4',
        'seatF5',
        'seatF6',
        'seatF7',
        'seatF8',
        'seatF9',
        'seatF10',
        'seatF11',
        'seatF12',
        'seatF13',
        'seatF14',
        'seatF15',
        'seatF16',
        'seatF17',
        'seatF18',
        'seatG1',
        'seatG2',
        'seatG3',
        'seatG4',
        'seatG5',
        'seatG6',
        'seatG7',
        'seatG8',
        'seatG9',
        'seatG10',
        'seatG11',
        'seatG12',
        'seatG13',
        'seatG14',
        'seatG15',
        'seatG16',
        'seatH1',
        'seatH2',
        'seatH3',
        'seatH4',
        'seatH5',
        'seatH6',
        'seatH7',
        'seatH8',
        'seatH9',
        'seatH10',
        'seatH11',
        'seatH12',
        'seatH13',

        // Corporate tier - Almost fully booked (66 seats booked, 8 available)
        'seatI1',
        'seatI2',
        'seatI3',
        'seatI4',
        'seatI5',
        'seatI6',
        'seatI7',
        'seatI8',
        'seatI9',
        'seatI10',
        'seatI11',
        'seatI12',
        'seatI13',
        'seatI14',
        'seatI15',
        'seatI16',
        'seatJ1',
        'seatJ2',
        'seatJ3',
        'seatJ4',
        'seatJ5',
        'seatJ6',
        'seatJ7',
        'seatJ8',
        'seatJ9',
        'seatJ10',
        'seatJ11',
        'seatJ12',
        'seatJ13',
        'seatJ14',
        'seatJ15',
        'seatJ16',
        'seatK1',
        'seatK2',
        'seatK3',
        'seatK4',
        'seatK5',
        'seatK6',
        'seatK7',
        'seatK8',
        'seatK9',
        'seatK10',
        'seatK11',
        'seatK12',
        'seatK13',
        'seatK14',
        'seatK15',
        'seatK16',
        'seatL1',
        'seatL2',
        'seatL3',
        'seatL4',
        'seatL5',
        'seatL6',
        'seatL7',
        'seatL8',
        'seatL9',
        'seatL10',
        'seatL11',
        'seatL12',
        'seatL13',
        'seatL14',
        'seatM1',
        'seatM2',
        'seatM3',
        'seatM4',
        'seatM5',
        'seatM6',
        'seatM7',
        'seatM8',
        'seatM9',
        'seatM10',
        'seatM11',
        'seatM12',

        // Budget tier - Heavy booking (38 seats booked, 10 available)
        'seatN1',
        'seatN2',
        'seatN3',
        'seatN4',
        'seatN5',
        'seatN6',
        'seatN7',
        'seatN8',
        'seatN9',
        'seatN10',
        'seatN11',
        'seatN12',
        'seatN13',
        'seatN14',
        'seatN15',
        'seatN16',
        'seatO1',
        'seatO2',
        'seatO3',
        'seatO4',
        'seatO5',
        'seatO6',
        'seatO7',
        'seatO8',
        'seatO9',
        'seatO10',
        'seatO11',
        'seatO12',
        'seatO13',
        'seatO14',
        'seatO15',
        'seatO16',
        'seatP1',
        'seatP2',
        'seatP3',
        'seatP4',
        'seatP5',
        'seatP6',
      ],

      // 09:15 PM (Night show - 78% booked = 203 seats booked, 57 available)
      4: [
        // Executive tier - Good booking (108 seats booked, 30 available)
        'seatA1',
        'seatA2',
        'seatA3',
        'seatA4',
        'seatA5',
        'seatA6',
        'seatA7',
        'seatA8',
        'seatA9',
        'seatA10',
        'seatA11',
        'seatA12',
        'seatA13',
        'seatA14',
        'seatA15',
        'seatA16',
        'seatA17',
        'seatA18',
        'seatB1',
        'seatB2',
        'seatB3',
        'seatB4',
        'seatB5',
        'seatB6',
        'seatB7',
        'seatB8',
        'seatB9',
        'seatB10',
        'seatB11',
        'seatB12',
        'seatB13',
        'seatB14',
        'seatB15',
        'seatB16',
        'seatB17',
        'seatB18',
        'seatC1',
        'seatC2',
        'seatC3',
        'seatC4',
        'seatC5',
        'seatC6',
        'seatC7',
        'seatC8',
        'seatC9',
        'seatC10',
        'seatC11',
        'seatC12',
        'seatC13',
        'seatC14',
        'seatC15',
        'seatC16',
        'seatC17',
        'seatC18',
        'seatD1',
        'seatD2',
        'seatD3',
        'seatD4',
        'seatD5',
        'seatD6',
        'seatD7',
        'seatD8',
        'seatD9',
        'seatD10',
        'seatD11',
        'seatD12',
        'seatD13',
        'seatD14',
        'seatD15',
        'seatD16',
        'seatD17',
        'seatD18',
        'seatE1',
        'seatE2',
        'seatE3',
        'seatE4',
        'seatE5',
        'seatE6',
        'seatE7',
        'seatE8',
        'seatE9',
        'seatE10',
        'seatE11',
        'seatE12',
        'seatE13',
        'seatE14',
        'seatE15',
        'seatE16',
        'seatE17',
        'seatE18',
        'seatF1',
        'seatF2',
        'seatF3',
        'seatF4',
        'seatF5',
        'seatF6',
        'seatF7',
        'seatF8',
        'seatF9',
        'seatF10',
        'seatF11',
        'seatF12',
        'seatF13',
        'seatF14',
        'seatF15',
        'seatF16',
        'seatF17',
        'seatF18',

        // Corporate tier - Moderate booking (58 seats booked, 16 available)
        'seatI1',
        'seatI2',
        'seatI3',
        'seatI4',
        'seatI5',
        'seatI6',
        'seatI7',
        'seatI8',
        'seatI9',
        'seatI10',
        'seatI11',
        'seatI12',
        'seatI13',
        'seatI14',
        'seatI15',
        'seatI16',
        'seatJ1',
        'seatJ2',
        'seatJ3',
        'seatJ4',
        'seatJ5',
        'seatJ6',
        'seatJ7',
        'seatJ8',
        'seatJ9',
        'seatJ10',
        'seatJ11',
        'seatJ12',
        'seatJ13',
        'seatJ14',
        'seatJ15',
        'seatJ16',
        'seatK1',
        'seatK2',
        'seatK3',
        'seatK4',
        'seatK5',
        'seatK6',
        'seatK7',
        'seatK8',
        'seatK9',
        'seatK10',
        'seatK11',
        'seatK12',
        'seatK13',
        'seatK14',
        'seatK15',
        'seatK16',
        'seatL1',
        'seatL2',
        'seatL3',
        'seatL4',
        'seatL5',
        'seatL6',
        'seatL7',
        'seatL8',
        'seatL9',
        'seatL10',

        // Budget tier - Light booking (37 seats booked, 11 available)
        'seatN1',
        'seatN2',
        'seatN3',
        'seatN4',
        'seatN5',
        'seatN6',
        'seatN7',
        'seatN8',
        'seatN9',
        'seatN10',
        'seatN11',
        'seatN12',
        'seatN13',
        'seatN14',
        'seatN15',
        'seatN16',
        'seatO1',
        'seatO2',
        'seatO3',
        'seatO4',
        'seatO5',
        'seatO6',
        'seatO7',
        'seatO8',
        'seatO9',
        'seatO10',
        'seatO11',
        'seatO12',
        'seatO13',
        'seatO14',
        'seatO15',
        'seatO16',
        'seatP1',
        'seatP2',
        'seatP3',
        'seatP4',
        'seatP5',
      ],
    };
    return {
      width: '100%',
      height: 800,
      nodes: this.initializeLayout(),
      snapSettings: { constraints: SnapConstraints.None },
      constraints: DiagramConstraints.Default & ~DiagramConstraints.UndoRedo,
      tool: DiagramTools.ZoomPan | DiagramTools.SingleSelect,
      diagramCreated: false,
      showTimings: [
        {
          id: 1,
          time: '11:50 AM',
          type: '4K DOLBY ATMOS',
          status: 'available',
        },
        { id: 2, time: '02:25 PM', type: '4K DOLBY ATMOS', status: 'sold-out' },
        {
          id: 3,
          time: '06:20 PM',
          type: '4K DOLBY ATMOS',
          status: 'filling-fast',
        },
        {
          id: 4,
          time: '09:15 PM',
          type: '4K DOLBY ATMOS',
          status: 'filling-fast',
        },
      ],
      selectedTimingId: 1,
      timingSpecificBookedSeats,
      selectedSeatsArray: [],
      seatSelection: {
        SeatNumbers: [],
        TicketCount: 0,
        Amount: 0,
        Category: '',
      },
      notificationMessage: '',
      notificationTimeout: null,
      showBookingDialog: false,
      dialogContent: '',
      dateLabelText: '',
      movieTimingText: '',
      dialogButtons: [],
    };
  },
  computed: {
    totalAmount() {
      let amt = this.seatSelection.Amount ? this.seatSelection.Amount + 6 : 0;
      return amt;
    },
  },
  mounted() {

    this.updateDateTime(this.selectedTimingId - 1);
    this.dialogButtons = [
      {
        click: () => {
          if (this.$refs.bookingDialog && this.$refs.bookingDialog.hide) {
            this.$refs.bookingDialog.hide();
          }
        },
        buttonModel: {
          content: 'Close',
          cssClass: 'btn2 btn2-proceed',
          isPrimary: true
        }
      }
    ];

     this.$nextTick(() => {
      if (this.$refs.diagramObject && this.$refs.diagramObject.ej2Instances) {
          this.$refs.diagramObject.ej2Instances.fitToPage();;
      }
    });
  },
  methods: {
    // Diagram instance getter
    diagramObj() {
      return this.$refs.diagramObject.ej2Instances;
    },
    getBookedSeatsForTiming(timingId) {
      return this.timingSpecificBookedSeats[timingId] || [];
    },
    refreshSeatingLayout() {
      let bookedSet = new Set(
        this.getBookedSeatsForTiming(this.selectedTimingId)
      );
      diagramInstance.nodes.forEach((node) => {
        if (node.addInfo && node.addInfo.SeatNumber) {
          // Reset styles
          node.style = node.style || {};
          node.style.fill = 'transparent';
          node.style.strokeColor = '#9CA3AF';
          if (node.annotations && node.annotations[0]) {
            node.annotations[0].style = node.annotations[0].style || {};
            node.annotations[0].style.color = '#374151';
          }
          node.addInfo.Booked = false;
          if (bookedSet.has(node.id)) {
            node.style.fill = '#E5E7EB';
            node.style.strokeColor = '#E5E7EB';
            if (node.annotations && node.annotations[0]) {
              node.annotations[0].style.color = '#9CA3AF';
            }
            node.addInfo.Booked = true;
          }
          node.tooltip.content = this.seatTooltipTemplate(node.addInfo, node);
          this.diagramObj().dataBind();
        }
      });
      this.diagramObj().dataBind();
    },
    // Venn example: call this onCreated
    onDiagramCreated() {
      this.diagramCreated = true;
      diagramInstance = this.diagramObj();
      //this.initializeLayout();
      diagramInstance.fitToPage({ canZoomOut: true });
      this.refreshSeatingLayout();
    },

    onDiagramLoad(){
      if (this.diagramCreated && this.diagramObj()) {
        setTimeout(()=>{
          if (this.$refs.diagramObject && this.$refs.diagramObject.ej2Instances) {
              this.$refs.diagramObject.ej2Instances.fitToPage();
          }
        }, 100)
      }
    },

    unSelectSeat(seatNode) {
      // Logic for DESELECTING a seat
      const idx = this.selectedSeatsArray.indexOf(seatNode.id);
      if (idx !== -1) {
        this.selectedSeatsArray.splice(idx, 1);
      }
      // Reset styling for previously selected seats
      seatNode.style.fill = "transparent";
      seatNode.style.strokeColor = "#9CA3AF";
      if (seatNode.annotations && seatNode.annotations[0] && seatNode.annotations[0].style) {
        seatNode.annotations[0].style.color = "#374151"; // Reset annotation color
      }
    },

    // On diagram click event
    onDiagramClick(args) {
      if (args && args.element && args.element.addInfo) {
        let currentNode = args.element;
        if (currentNode.addInfo.Booked) {
          currentNode.tooltip.content = this.seatTooltipTemplate(currentNode.addInfo, currentNode);
          this.diagramObj().dataBind();
          return;
        }
        
        // Not already in selection
        if (!this.selectedSeatsArray.includes(currentNode.id)) {
          // detect tier
          let newTier = (
            currentNode.addInfo.TierCategory ||
            currentNode.addInfo.Tier ||
            ''
          ).toString();
          
          let selectedSeats = this.selectedSeatsArray
            .map((seatId) => diagramInstance.nodes.find((n) => n.id === seatId))
            .filter(Boolean);
            
          let currentTier =
            selectedSeats.length > 0
              ? (
                selectedSeats[0].addInfo.TierCategory ||
                selectedSeats[0].addInfo.Tier ||
                ''
              ).toString()
              : null;
              
          let differentTier = currentTier && newTier !== currentTier;
          
          if (differentTier) {
            // Iterate backwards to avoid skipping elements after splicing
            for (let i = this.selectedSeatsArray.length - 1; i >= 0; i--) {
              const seatNode = diagramInstance.getObject(this.selectedSeatsArray[i]);
              if (seatNode) {
                this.unSelectSeat(seatNode);
                // Update tooltip for these deselected original seats
                seatNode.tooltip.content = this.seatTooltipTemplate(seatNode.addInfo, seatNode);
              }
            }
            this.hideNotification();
          } else if (this.selectedSeatsArray.length >= 10) {
            this.showNotification('Maximum 10 tickets can be selected');
            return;
          }
          
          this.selectedSeatsArray.push(currentNode.id);
          currentNode.style.fill = '#15803D';
          currentNode.style.strokeColor = '#15803D';
          if (currentNode.annotations && currentNode.annotations[0])
            currentNode.annotations[0].style.color = 'white';
          this.diagramObj().dataBind();
          if (this.selectedSeatsArray.length < 10) this.hideNotification();
        } else {
          // Remove seat
          this.unSelectSeat(currentNode);
          this.diagramObj().dataBind();
          this.hideNotification();
        }
        
        currentNode.tooltip.content = this.seatTooltipTemplate(currentNode.addInfo, currentNode);
        this.diagramObj().dataBind();
        this.updateBookingSummary();
      }
    },
    onTimingClick(timingObj) {
      if (timingObj.status === 'sold-out') return;
      this.selectedTimingId = timingObj.id;
      this.selectedSeatsArray = [];
      this.refreshSeatingLayout();
      this.updateBookingSummary();
      this.hideNotification();
      this.updateDateTime(this.selectedTimingId - 1);
    },
    showNotification(msg) {
      this.notificationMessage = msg;
      clearTimeout(this.notificationTimeout);
      this.notificationTimeout = setTimeout(() => {
        this.notificationMessage = '';
      }, 1800);
    },
    hideNotification() {
      this.notificationMessage = '';
      clearTimeout(this.notificationTimeout);
    },

    seatTooltipTemplate(addInfoData, currentNode) {
      let addInfo = addInfoData || {};
      let seatNumber = addInfo.SeatNumber || '';
      let row = addInfo.Row || '';
      let tier = addInfo.TierCategory || addInfo.Tier || '';
      let price = addInfo.Price !== undefined ? addInfo.Price : '';
      let isSelected = false;
      if (currentNode)
        isSelected = this.selectedSeatsArray.includes(currentNode.id);
      let isBooked = !!addInfo.Booked;
      let status = isSelected ? 'Selected' : isBooked ? 'Booked' : 'Available';
      let statusBg = isSelected ? '#28a745' : isBooked ? '#6c757d' : '#17a2b8';
      return `<div style="margin:0;padding:10px;font-family:Arial,sans-serif;min-width:150px;">
      <div style="font-weight:bold;margin-bottom:5px;font-size:14px;">Seat ${seatNumber}</div>
      <div style="font-size:12px;margin-bottom:3px;"><strong>Row:</strong> ${row}</div>
      <div style="font-size:12px;margin-bottom:3px;"><strong>Category:</strong> ${tier}</div>
      <div style="font-size:12px;margin-bottom:3px;"><strong>Price:</strong> $${price}</div>
      <div style="font-size:12px;margin-top:5px;">
        <span style="padding:2px 6px;border-radius:3px;font-weight:bold;background-color:${statusBg};color:white;font-size:11px;">
          ${status}
        </span>
      </div>
    </div>`;
    },
    updateBookingSummary() {
      if (this.selectedSeatsArray.length > 0) {
        let selectedSeats = this.selectedSeatsArray
          .map((seatId) => {
            let node = diagramInstance.nodes.find((n) => n.id === seatId);
            if (node && node.addInfo) {
              let price = parseFloat(node.addInfo.Price);
              if (isNaN(price)) price = 0;
              return {
                SeatNumber: node.addInfo.SeatNumber || '',
                Row: node.addInfo.Row || '',
                Price: price,
                Tier: (
                  node.addInfo.TierCategory ||
                  node.addInfo.Tier ||
                  ''
                ).toString(),
              };
            }
            return null;
          })
          .filter(Boolean);
        this.seatSelection.SeatNumbers = selectedSeats.map((s) => s.SeatNumber);
        this.seatSelection.TicketCount = selectedSeats.length;
        let totalAmount = selectedSeats.reduce(
          (sum, s) => sum + (Number(s.Price) || 0),
          0
        );
        this.seatSelection.Amount = selectedSeats.length ? totalAmount : null;
        this.seatSelection.Category =
          selectedSeats.length > 0 ? selectedSeats[0].Tier.toUpperCase() : '';
      } else {
        this.seatSelection.SeatNumbers = [];
        this.seatSelection.TicketCount = 0;
        this.seatSelection.Amount = null;
        this.seatSelection.Category = '';
      }
    },
    updateDateTime(id) {
      let showtiming = this.showTimings[id];
      let now = new Date();
      let options = { weekday: 'long', day: '2-digit', month: 'short' };
      let formatted = now.toLocaleString('en-IN', options);
      let day = now.toLocaleDateString('en-IN', { weekday: 'short' });
      let date = now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
      });
      this.movieTimingText = `${formatted}, ${showtiming.time}`;
      this.dateLabelText = `${day}<br>${date}`;
      document.getElementById('movie-timing').textContent = `${formatted}` + `, ${showtiming.time}`;
      document.getElementById('date-label').innerHTML = `${day}<br>${date}`;
    },
    initializeLayout() {
      this.nodes = [];
      let y = 50;
      let createTierLabel = (tierName, price, y) => {
        this.nodes.push({
          id: `tier-${tierName}`,
          width: 200,
          height: 25,
          offsetX: 585,
          offsetY: y,
          shape: { type: 'Text', content: `${tierName} - $${price}` },
          style: { fontSize: 16, bold: true },
          constraints: NodeConstraints.ReadOnly
        });
      };
      let createRowLabel = (row, y) => {
        this.nodes.push({
          id: `row-${row}`,
          width: 30,
          height: 32,
          offsetX: 80,
          offsetY: y,
          shape: { type: 'Text', content: row },
          style: { fontSize: 14, bold: true },
          constraints: NodeConstraints.ReadOnly
        });
      };
      let createSeatNode = (
        seatId,
        seatNumber,
        row,
        column,
        price,
        tier,
        x,
        y
      ) => {
        var addInfoData = {
          SeatNumber: seatNumber,
          Row: row,
          Column: column,
          Price: price,
          TierCategory: tier,
          Booked: false,
        };
        this.nodes.push({
          id: seatId,
          width: 32,
          height: 32,
          offsetX: x,
          offsetY: y,
          shape: { cornerRadius: 4 },
          style: {
            strokeColor: '#9CA3AF',
            strokeWidth: 2,
            fill: 'transparent',
          },
          annotations: [
            { content: column.toString(), style: { color: '#374151' } },
          ],
          addInfo: addInfoData,
          tooltip: { content: this.seatTooltipTemplate(addInfoData, null), relativeMode: 'Object' },
          constraints: (NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.ReadOnly) & ~NodeConstraints.Select
        });
      };
      let createSplitSeats = (row, seatCount, price, tier, y) => {
        const center = 600,
          seatWidth = 32,
          spacing = 10,
          aisle = 82;
        const leftSeats = Math.floor(seatCount / 2);
        const rightSeats = seatCount - leftSeats;
        const leftStartX =
          center -
          aisle / 2 -
          (leftSeats * seatWidth + (leftSeats - 1) * spacing);
        const rightStartX = center + aisle / 2;
        for (let i = 1; i <= leftSeats; i++) {
          let x = leftStartX + (i - 1) * (seatWidth + spacing);
          createSeatNode(
            `seat${row}${i}`,
            `${row}${i}`,
            row,
            i,
            price,
            tier,
            x,
            y
          );
        }
        for (let i = leftSeats + 1; i <= seatCount; i++) {
          let x = rightStartX + (i - leftSeats - 1) * (seatWidth + spacing);
          createSeatNode(
            `seat${row}${i}`,
            `${row}${i}`,
            row,
            i,
            price,
            tier,
            x,
            y
          );
        }
      };
      let createTierSeats = (tier, price, startY, rows) => {
        let y = startY;
        createTierLabel(tier, price, y - 50);
        rows.forEach(({ row, count }) => {
          createRowLabel(row, y);
          createSplitSeats(row, count, price, tier, y);
          y += 48;
        });
        return y;
      };
      let createScreen = (y) => {
        this.nodes.push({
          id: 'screen',
          width: 600,
          height: 80,
          offsetX: 580,
          offsetY: y,
          constraints: 1 << 2,
          shape: {
            type: 'Native',
            content: `<svg width="394" height="56" viewBox="0 0 394 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.0321 1.62598L2 37.6661C124.157 52.0822 312.899 43.6728 392 37.6661L364.965 1.62598C276.852 11.8374 148.187 11.8374 27.0321 1.62598Z" stroke="#818CF8" stroke-width="2" stroke-linejoin="round" />
            <path d="M2 45.666C124.157 60.0821 312.899 51.6727 392 45.666" stroke="#818CF8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M27.0321 1.62598L2 37.6661C124.157 52.0822 312.899 43.6728 392 37.6661L364.965 1.62598C276.852 11.8374 148.187 11.8374 27.0321 1.62598Z" fill="#E0E7FF" />
          </svg>`,
          },
          annotations: [
            {
              content: 'Screen This Way',
              offset: { x: 0.5, y: 1.5 },
              constraints: 1 << 2,
              style: { fontSize: 14, color: '#818CF8' },
            },
          ],
          constraints: NodeConstraints.ReadOnly
        });
      };

      // Build tiers/rows as original
      y = createTierSeats('Executive', 25, y, [
        { row: 'A', count: 18 },
        { row: 'B', count: 18 },
        { row: 'C', count: 18 },
        { row: 'D', count: 18 },
        { row: 'E', count: 18 },
        { row: 'F', count: 18 },
        { row: 'G', count: 16 },
        { row: 'H', count: 14 },
      ]);
      y += 92;
      y = createTierSeats('Corporate', 16, y, [
        { row: 'I', count: 16 },
        { row: 'J', count: 16 },
        { row: 'K', count: 16 },
        { row: 'L', count: 14 },
        { row: 'M', count: 12 },
      ]);
      y += 92;
      y = createTierSeats('Budget', 8, y, [
        { row: 'N', count: 16 },
        { row: 'O', count: 16 },
        { row: 'P', count: 16 },
      ]);
      y += 92;
      createScreen(y);
      return this.nodes;
    },
    onProceedToBook() {
      if (this.selectedSeatsArray.length === 0) return;
      // Add seats to booked array
      if (!this.timingSpecificBookedSeats[this.selectedTimingId])
        this.timingSpecificBookedSeats[this.selectedTimingId] = [];
      this.timingSpecificBookedSeats[this.selectedTimingId].push(
        ...this.selectedSeatsArray
      );

      // Dialog message
      let movieTitle = 'F1: The Movie';
      let theater = 'Velvet Aurora Cinematheque';
      let showTime = this.movieTimingText.replace(/<br>/g, ' ');
      let seats = this.seatSelection.SeatNumbers.join(', ');
      let totalAmount = (this.seatSelection.Amount + 6).toFixed(2);
      let bookingId = 'VAC' + Date.now().toString().slice(-8);
      this.dialogContent = this.buildBookingSuccessHtml(
        movieTitle,
        theater,
        showTime,
        seats,
        totalAmount,
        bookingId
      );
      this.showBookingDialog = true;
      this.$refs.bookingDialog.show();

      // Mark seats visually as booked
      this.selectedSeatsArray.forEach((seatId) => {
        let node = diagramInstance.nodes.find((n) => n.id === seatId);
        if (node && node.addInfo) {
          node.addInfo.Booked = true;
          node.style.fill = '#E5E7EB';
          node.style.strokeColor = '#E5E7EB';
          if (node.annotations && node.annotations[0]) {
            node.annotations[0].style.color = '#9CA3AF';
          }
        }
      });
      this.selectedSeatsArray = [];
      this.updateBookingSummary();
      this.refreshSeatingLayout();
      this.hideNotification();
    },
    buildBookingSuccessHtml(
      movieTitle,
      theater,
      showTime,
      seats,
      totalAmount,
      bookingId
    ) {
      return `<div class="notification-header">
      <div class="success-icon">&#10003;</div>
      <div class="success-title">Booking Confirmed!</div>
      <div class="success-message">Your tickets have been successfully booked.</div>
    </div>
    <div class="booking-details">
      <h4>Booking Details:</h4>
      <p><strong>Movie:</strong> ${movieTitle}</p>
      <p><strong>Theater:</strong> ${theater}</p>
      <p><strong>Show Time:</strong> ${showTime}</p>
      <p><strong>Seats:</strong> ${seats}</p>
      <p><strong>Total Amount:</strong> $${totalAmount}</p>
      <p><strong>Booking ID:</strong> ${bookingId}</p>
    </div>`;
    },
  },
};
</script>
