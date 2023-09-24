import NotificationCard from "@/public/components/NotificationCard/page";

const Notifications = () => {
    return (
        <>
        <div className="pt-4">
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