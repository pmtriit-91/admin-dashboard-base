import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { v4 as uuidv4 } from "uuid";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const _id_uuid = uuidv4();

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: _id_uuid,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    console.log(selected);
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box
      m="20px"
      sx={{
        "& .MuiTypography-root.MuiTypography-h2": {
          margin: "0 0 5px 0",
        },
        "& .fc-list-day th:first-child": {
          bgcolor: colors.primary[800],
        },
        "& .fc .fc-list-event:hover td": {
          bgcolor: colors.primary[200],
        },
      }}
    >
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => {
              // mục đích: lấy sự kiện event.start tức là ngày sự kiện
              // format ngày sự kiện event.start thành chuỗi ngày để render ra UI
              return (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric", // hiển thị số
                          month: "short", // hiện thị viết tắt 3 chữ
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth" // chế độ xem ban đầu
            editable={true}
            selectable={true}
            selectMirror={true} // giúp kéo thả (nhấn dữ chuột kéo đến các ngày khác)
            dayMaxEvents={true} // giúp tạo nút +more khi số lượng note vượt quá chiều dài ô
            // moreLinkClick={"popover"} // mặc định là "popover" ngoài ra còn có  “week”, “day" chỉ sử dụng khi kèm theo dayMaxEvent
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
            // khởi tạo note mặc định ở sidebar của calendar
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
