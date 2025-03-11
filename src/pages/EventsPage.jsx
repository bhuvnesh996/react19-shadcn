import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, MapPin, Search } from "lucide-react";
import { format, isToday, isThisWeek, isThisMonth, isSameDay } from "date-fns";
import { mockEvents } from "../data/mockEvents";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDateFilter, setSelectedDateFilter] = useState("all");
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewEvent, setViewEvent] = useState(null);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false); // Controls add event popup
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    location: "",
    imageUrl: "",
    logoUrl: "",
  });

  useEffect(() => {
    setEvents(mockEvents);
    setFilteredEvents(mockEvents);
  }, []);

  useEffect(() => {
    let filtered = events;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((event) => event.category === selectedCategory);
    }

    if (selectedDateFilter !== "all") {
      const now = new Date();
      filtered = filtered.filter((event) => {
        const eventDate = new Date(event.date);
        if (selectedDateFilter === "today") return isToday(eventDate);
        if (selectedDateFilter === "this_week") return isThisWeek(eventDate);
        if (selectedDateFilter === "this_month") return isThisMonth(eventDate);
        return true;
      });
    }

    if (selectedDate) {
      filtered = filtered.filter((event) => isSameDay(new Date(event.date), selectedDate));
    }

    if (searchTitle) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
  }, [selectedCategory, selectedDateFilter, searchTitle, selectedDate, events]);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Religious", label: "Religious" },
    { value: "Social", label: "Social" },
    { value: "Charity", label: "Charity" },
    { value: "Educational", label: "Educational" },
    { value: "Cultural", label: "Cultural" },
  ];

  const dateFilters = [
    { value: "all", label: "All Time" },
    { value: "today", label: "Today" },
    { value: "this_week", label: "This Week" },
    { value: "this_month", label: "This Month" },
  ];

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.category) {
      alert("Please fill in all required fields!");
      return;
    }

    const updatedEvents = [...events, { id: events.length + 1, ...newEvent }];
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents);
    setIsAddEventOpen(false);
    setNewEvent({
      title: "",
      description: "",
      category: "",
      date: "",
      location: "",
      imageUrl: "",
      logoUrl: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Upcoming Events</h1>
        <p className="text-lg text-gray-500 mb-8">
          Discover and join events from various communities and interest groups.
        </p>

        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDateFilter} onValueChange={setSelectedDateFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent>
                {dateFilters.map((filter) => (
                  <SelectItem key={filter.value} value={filter.value}>
                    {filter.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              type="text"
              placeholder="Search by title..."
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              className="w-[250px]"
            />
          </div>

          {/* Add Event Button */}
          <Button onClick={() => setIsAddEventOpen(true)} className="bg-purple-800 text-white hover:bg-green-700">
            + Add Event
          </Button>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredEvents.map((event) => (
            <motion.div key={event.id} layout className="flex">
              <Card className="w-full hover:shadow-lg">
                <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover" />
                <CardHeader className="p-4">
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p>{event.description}</p>
                  <p>{format(new Date(event.date), "MMMM d, yyyy")}</p>
                  <p>{event.location}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add Event Dialog */}
      <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
          </DialogHeader>
          <Input placeholder="Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
          <Input placeholder="Date" type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
          <Input placeholder="Location" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
          <Button onClick={handleAddEvent} className="mt-4">Save Event</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventsPage;
