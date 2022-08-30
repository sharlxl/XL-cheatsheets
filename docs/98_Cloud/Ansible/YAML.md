# YAML

- configuration files in YAML.
- some other config format XML, JSON

\*\*\*equal indentation is important. Remember Python

## Key value pair

```yaml
Key: Value
```

## Array/Lists

```yaml
Fruits:
  - Apple
  - Banana
  - Pear
```

## Dictionary/Map

```yaml
Banana:
  Calories: 105
  Fat: 0.4 g
  Carbs: 27 g

Grapes:
  Calories: 62
  Fat: 0.3 g
  Carbs: 16 g
```

## Key Value/Dictionary/Lists

```yaml
Fruits:
  - Banana:
      Calories: 105
      Fat: 0.4 g
      Carbs: 27 g
  - Grape:
      Calories: 62
      Fat: 0.3 g
      Carbs: 16 g
```

## Commenting

```yaml
# this is a comment.
```

:::tip
Dictionaries will match in a comparison even if the order is not correct.

whereas arrays/list will not match unless it it in the exact same order.
:::
