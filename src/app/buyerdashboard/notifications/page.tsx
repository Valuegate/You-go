import NotificationCard from "@/public/components/NotificationCard/page";

const Notifications = () => {
    return (
        <>
        <div className="pt-4">
        <div className="flex justify-between pb-2">
          <h2 className="text-base font-bold text-light-black-5">Notifications</h2>
          <h3 className="text-sm font-bold text-light-black-5">Mark all as read</h3>
        </div>
          <div className="bg-primary-1 rounded-lg px-4 py-4">
            <div className="flex flex-col gap-3">
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </div>
          </div>
          </div>
        </>
    );
};

export default Notifications;