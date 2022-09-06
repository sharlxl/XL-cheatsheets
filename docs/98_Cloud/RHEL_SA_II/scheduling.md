---
title: Scheduling Future Tasks
sidebar_position: 1
---

# Scheduling tasks

- `TIMESPEC` - to schedule a new job
- `TIMESPEC at now +5min < myscript`
- `atq` or `at -l` - lists the pending jobs for users
- `atrm` - deletes jobs by their job number

```bash title="example"
#1
at 13:00
#OR
at 01:00 PM

date >> /tmp/myfile.txt

atq
# > 14      Tue Nov 5 13:00:00 2022 a root

atrm 14

echo 'date >> /tmp/myfile.txt' | at now
echo 'date >> /tmp/myfile.txt' | at now +5min
```

# Scheduling future tasks

- Controlling nice values with queue designation (-20 is the highest priority whicle 19 is the lowest)
- queue designation range from ' `a-z`, with a being the default queue and b reserved for batch jobs

# Scheduling recurring system jobs

## system wide crontab files

- recurring systemjobs are defined in 2 locations : /etc/crontab and /etc/cron.d
- crontab system also includes repos for scripts that nee to run every hour/day/week/month
- such as /etc/cron.hourly, /etc/cron.daily, /etc/cron.weekly, /etc/cron.monthly
